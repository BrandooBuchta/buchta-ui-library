import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Komponenta připravena po SSR
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <p>
        Aktuální téma: <strong>{resolvedTheme}</strong>
      </p>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("system")}>System</button>
    </div>
  );
};

export default ThemeSwitcher;
