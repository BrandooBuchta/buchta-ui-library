import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { ReactNode } from "react";

interface BuchtaUIProviderProps {
  children: ReactNode;
}

const BuchtaUIProvider: React.FC<BuchtaUIProviderProps> = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system" // Výchozí systémové téma
      themes={["light", "dark", "system"]} // Povolena témata
    >
      {children}
    </NextThemesProvider>
  );
};

export default BuchtaUIProvider;
