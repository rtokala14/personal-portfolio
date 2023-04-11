"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button
      onClick={() => {
        if (theme === "black") {
          setTheme("lofi");
        } else {
          setTheme("black");
        }
      }}
      className=" btn btn-ghost p-2 btn-square"
    >
      {theme === "black" ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}
    </button>
  );
}

export default ThemeChanger;
