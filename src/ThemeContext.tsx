import React, { createContext, useMemo, useState, useContext, useCallback } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme";

interface ThemeContextType {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}

const ColorModeContext = createContext<ThemeContextType>({
  toggleColorMode: () => {},
  mode: "light",
});

export const useColorMode = () => useContext(ColorModeContext);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
