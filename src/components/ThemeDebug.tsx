"use client";

import { useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeDebug() {
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    console.log("Theme Debug:", {
      theme,
      resolvedTheme,
      htmlClass: document.documentElement.className,
      hasDarkClass: document.documentElement.classList.contains("dark"),
      hasLightClass: document.documentElement.classList.contains("light"),
    });
  }, [theme, resolvedTheme]);

  return null;
}
