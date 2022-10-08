import { createTheme } from "@mui/material";
import React, { createContext, useState, useMemo } from "react";
import { Theme as ThemeType } from "@mui/material/styles";
let ThemeContext = createContext({
  theme: {},
  mode: "light",
  toggleColorMode: () => {},
});
function Theme({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  function toggleColorMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#de4d86",
          },
          contrastThreshold: 3,
          // Used by the functions below to shift a color's luminance by approximately
          // two indexes within its tonal palette.
          // E.g., shift from Red 500 to Red 300 or Red 700.
          tonalOffset: 0.2,
        },
      }),
    [mode]
  );

  let ContextObj = {
    theme: theme,
    mode: mode,
    toggleColorMode: toggleColorMode,
  };
  return (
    <ThemeContext.Provider value={ContextObj}>{children}</ThemeContext.Provider>
  );
}

export { Theme, ThemeContext };
