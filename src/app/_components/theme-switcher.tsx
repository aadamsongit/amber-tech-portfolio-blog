"use client";
import { useEffect, useState } from "react";
import styles from "./switch.module.css";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes = ["light", "dark"] as const;
type ThemeMode = (typeof modes)[number];

const Switch = () => {
  const [mode, setMode] = useState<ThemeMode>("light");

  // On mount, read stored preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode;
    setMode(stored ?? "light");
    document.documentElement.classList.toggle(
      "dark",
      (stored ?? "light") === "dark"
    );
  }, []);

  // Update localStorage and DOM class whenever mode changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  // Toggle between light and dark
  const handleModeSwitch = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <button
      className={styles.switch}
      onClick={handleModeSwitch}
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      {/* Optional: display icon */}
      {mode === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export const ThemeSwitcher = () => {
  return <Switch />;
};
