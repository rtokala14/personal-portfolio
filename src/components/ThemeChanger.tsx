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
      aria-label="Toggle Dark Mode"
      className=" btn btn-ghost btn-square rounded-md"
    >
      {theme === "black" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeChanger;
