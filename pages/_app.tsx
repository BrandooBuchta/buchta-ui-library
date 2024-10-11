import type { AppProps } from "next/app";

import React from "react";

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { CookiesBar } from "..";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CookiesBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
