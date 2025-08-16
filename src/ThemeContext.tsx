import type React from "react";
import { createContext, useMemo, useState, useContext, useCallback, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme";

type ColorMode = "light" | "dark";

type ThemeContextValue = {
  mode: ColorMode;
  toggleColorMode: () => void;
};

const ColorModeContext = createContext<ThemeContextValue>({ mode: "light", toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

function readInitialMode(): ColorMode {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
  }
  try {
    const saved = localStorage.getItem("theme-mode");
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  return "dark";
}

function applyModeToDocument(mode: ColorMode) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", mode);
  document.documentElement.style.backgroundColor = mode === "dark" ? "#0a0a0a" : "#EAF6EE";
  document.documentElement.style.colorScheme = mode === "dark" ? "dark" : "light";
}

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>(() => readInitialMode());

  useEffect(() => {
    applyModeToDocument(mode);
    try {
      localStorage.setItem("theme-mode", mode);
    } catch {}
  }, [mode]);

  const toggleColorMode = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);
  const contextValue = useMemo<ThemeContextValue>(() => ({ mode, toggleColorMode }), [mode, toggleColorMode]);

  return (
    <ColorModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
