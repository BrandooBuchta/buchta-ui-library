import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      <button
        className="px-4 py-2 bg-default-500 text-white rounded-md"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
