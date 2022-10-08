import React, { useContext, useState } from "react";
import styled from "styled-components/macro";
import SideBar from "./Components/SideBar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { MenuData } from "../../data";
import { ListItemIcon } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Outlet } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import { sizes, devices } from "../../Media Queries/Queries";
import { ThemeContext } from "../../Contexts/Theme";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  min-height: 100vh;
  @media ${devices.tablet} {
    grid-template-columns: 250px 1fr;
  }
`;
const Heading = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
  padding: 0.5em 0.5em;
`;
function Home({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: (state: boolean) => void;
}) {
  let { mode, toggleColorMode } = useContext(ThemeContext);
  let disableDrawer = useWindowSize();

  return (
    <Wrapper>
      {disableDrawer ? (
        ""
      ) : (
        <Drawer variant="permanent">
          <Box role="presentation" sx={{ width: 250 }}>
            <List>
              <Heading>Loop Kitchen</Heading>
            </List>
            <Divider></Divider>
            <List>
              {MenuData.map((element) => {
                return (
                  <ListItem
                    onClick={
                      element.Title === "Light or Dark"
                        ? toggleColorMode
                        : undefined
                    }
                    key={element.Title}
                    disablePadding
                  >
                    <ListItemButton>
                      {element.Title == "Light or Dark" ? (
                        <>
                          {mode === "light" ? (
                            element.Icon()
                          ) : (
                            <ListItemIcon>
                              <Brightness4Icon />
                            </ListItemIcon>
                          )}

                          <ListItemText
                            primary={
                              mode === "light" ? "Light mode" : "Dark Mode"
                            }
                          ></ListItemText>
                        </>
                      ) : (
                        <>
                          {element.Icon()}{" "}
                          <ListItemText primary={element.Title}></ListItemText>
                        </>
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}

      <Outlet />
      <SideBar open={open} handleSidebar={handleOpen}></SideBar>
    </Wrapper>
  );
}

export default Home;
