import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider, ListItemIcon } from "@mui/material";
import { MenuData } from "../../../data";
import { ThemeContext } from "../../../Contexts/Theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
const LinkTo = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const Heading = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
  padding: 0.5em 0.5em;
`;
function SideBar({
  open,
  handleSidebar,
}: {
  open: boolean;
  handleSidebar: (state: boolean) => void;
}) {
  let { mode, toggleColorMode } = useContext(ThemeContext);
  return (
    <Drawer
      open={open}
      anchor="left"
      onClose={() => {
        handleSidebar(false);
      }}
      ModalProps={{ keepMounted: true }}
    >
      <Box role="presentation" sx={{ width: 250 }}>
        <List>
          <Heading>Loop Kitchen</Heading>
        </List>
        <Divider></Divider>
        <List>
          {MenuData.map((element) => {
            return element.to === null ? (
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
                        primary={mode === "light" ? "Light mode" : "Dark Mode"}
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
            ) : (
              <LinkTo to={element.to}>
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
              </LinkTo>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}

export default SideBar;
