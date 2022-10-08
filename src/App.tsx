import { Theme } from "@mui/material/styles";
import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/macro";
import { ThemeProvider as MaterialThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import Restaurants from "./Components/Restaurants/Restaurants";
import { ThemeContext } from "./Contexts/Theme";
import { RestaurantsData } from "./Contexts/RestaurantsData";
function App() {
  let location = useLocation();
  let { theme } = useContext(ThemeContext);
  const [FirstLoad, setFirstLoad] = useState(true);

  let [open, setOpen] = useState(false);
  function handleOpen(state: boolean) {
    setOpen(state);
  }
  useEffect(() => {
    if (FirstLoad) {
      setFirstLoad(false);
    }
  }, [FirstLoad]);

  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline></CssBaseline>
        {FirstLoad && location.pathname === "/" && (
          <Navigate to={"/login"}></Navigate>
        )}
        <RestaurantsData>
          <div className="App">
            <Routes>
              <Route path={"/login"} element={<SignIn></SignIn>}></Route>
              <Route
                path={"/"}
                element={<Home open={open} handleOpen={handleOpen}></Home>}
              >
                <Route
                  path="home"
                  element={<Restaurants handleOpen={handleOpen}></Restaurants>}
                ></Route>
              </Route>
            </Routes>
          </div>
        </RestaurantsData>
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}

export default App;
