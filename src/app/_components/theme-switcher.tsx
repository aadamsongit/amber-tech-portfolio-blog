"use client";
import { useEffect, useState, memo } from "react";
import styles from "./switch.module.css";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes = ["system", "dark", "light"] as const;

declare global {
  var updateDOM: () => void;
}

export const NoFOUCScript = (storageKey: string) => {
  const [SYSTEM, DARK, LIGHT] = ["system", "dark", "light"];

  const modifyTransition = () => {
    const css = document.createElement("style");
    css.textContent = "*,*:after,*:before{transition:none !important;}";
    document.head.appendChild(css);
    return () => {
      getComputedStyle(document.body);
      setTimeout(() => document.head.removeChild(css), 1);
    };
  };

  const media = matchMedia(`(prefers-color-scheme: ${DARK})`);

  window.updateDOM = () => {
    const restore = modifyTransition();
    const mode = localStorage.getItem(storageKey) ?? SYSTEM;
    const systemMode = media.matches ? DARK : LIGHT;
    const resolved = mode === SYSTEM ? systemMode : mode;
    document.documentElement.classList.toggle(DARK, resolved === DARK);
    document.documentElement.dataset.mode = mode;
    restore();
  };
  window.updateDOM();
  media.addEventListener("change", window.updateDOM);
};

const Switch = () => {
  const [mode, setMode] = useState<"system" | "dark" | "light">("system");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY) as typeof mode;
    setMode(stored ?? "system");
    window.updateDOM?.();
    addEventListener("storage", (e) => {
      if (e.key === STORAGE_KEY && e.newValue)
        setMode(e.newValue as typeof mode);
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, mode);
    window.updateDOM?.();
  }, [mode]);

  const handleModeSwitch = () => {
    const index = modes.indexOf(mode);
    setMode(modes[(index + 1) % modes.length]);
  };

  return <button className={styles.switch} onClick={handleModeSwitch} />;
};

export const ThemeSwitcher = () => {
  // Inject only on client
  useEffect(() => {
    NoFOUCScript(STORAGE_KEY);
  }, []);

  return <Switch />;
};
