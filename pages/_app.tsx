import type { AppProps } from "next/app";

import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import { useTheme } from "next-themes";

import { CookiesBar } from "@/components";

function DebugTheme() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure content is rendered only after mounting
  if (!mounted) return null;

  return (
    <div>
      <p>Aktuální téma: {theme}</p>
      <p>Systémové téma: {systemTheme}</p>
    </div>
  );
}

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <select
      style={{
        padding: "5px",
        margin: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
    // attribute="data-theme"
    // defaultTheme="system"
    // enableSystem={true}
    >
      <DebugTheme />
      <ThemeSwitcher />
      <CookiesBar />
      <Component {...pageProps} />
    </div>
  );
}
