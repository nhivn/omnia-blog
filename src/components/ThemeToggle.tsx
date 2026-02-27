import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative flex items-center w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors cursor-pointer"
    >
      <span
        className={`absolute w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 flex items-center justify-center ${
          isDark ? "translate-x-6" : "translate-x-0.5"
        }`}
      >
        {isDark ? (
          <Moon size={12} className="text-gray-700" />
        ) : (
          <Sun size={12} className="text-amber-500" />
        )}
      </span>
    </button>
  );
}
