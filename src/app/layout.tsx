import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import Link from "next/link";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Amber Builds: Tech Blog 2025`,
  description: `Exploring agentic AI, open source, and modern dev tooling.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

// Example static posts — replace with MDX entries or API data
const posts = [
  { title: "First MCP Post", slug: "first-mcp-post" },
  { title: "Second Post", slug: "second-post" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Favicons / meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(
          inter.className,
          "dark:bg-slate-900 dark:text-slate-400 flex min-h-screen"
        )}
      >
        {/* Sidebar for desktop */}
        <aside className="hidden md:flex flex-col w-64 bg-gray-100 dark:bg-gray-800 p-4">
          {/* Inner inset container */}
          <div className="flex flex-col flex-1 bg-gray-200/60 dark:bg-gray-900/60 rounded-2xl shadow-inner p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Amber Builds
            </h2>

            <ThemeSwitcher />

            <nav className="flex flex-col space-y-2 mt-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
                >
                  {post.title}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar for mobile */}
          <nav className="md:hidden flex justify-center p-4">
            <div
              className="flex justify-between items-center w-full max-w-3xl
                  bg-white/50 dark:bg-gray-900/50
                  backdrop-blur-lg rounded-xl px-4 py-2 shadow-md"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Amber Builds
              </h2>
              <ThemeSwitcher />
            </div>
          </nav>

          {/* Page content */}
          <main className="flex-1 p-6 md:p-12">
            {/* Gradient Hero can be inserted here on home page */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
