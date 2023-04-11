"use client";

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
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="lofi">Light</option>
      <option value="black">Dark</option>
    </select>
  );
}

export default ThemeChanger;
