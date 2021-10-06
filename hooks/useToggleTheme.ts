import { Dispatch, useEffect, useState } from "react";

export type themeOptions = "dark" | "light";

type IToggleTheme = [colorTheme: themeOptions, setTheme: Dispatch<any>];

function useToggleTheme(): IToggleTheme {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useToggleTheme;
