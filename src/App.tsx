import { createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/macro";
import { ThemeProvider as MaterialThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn";
function App() {
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
  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <div className="App">
          <SignIn mode={mode} ToggleFunction={toggleColorMode}></SignIn>
        </div>
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}

export default App;
