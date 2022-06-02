import React, { FC, ReactNode, useReducer, useState } from "react";

import { createTheme, CssBaseline, Typography } from "@mui/material";

import {
  APP_BAR_HEIGHT,
  DRAWER_WIDTH,
  FOOTER_HEIGHT,
  FOOTER_TEXT,
} from "../utils/constants";
import { styled, useTheme } from "@mui/material/styles";
import NavBar, { INavPaths } from "../navbar/NavBar";
import Sidebar from "./Sidebar";
import { Box } from "@mui/system";

interface Props {
  children: ReactNode;
}

const defaultPaths: INavPaths[] = [
  { url: "/", name: "Home" },
  { url: "/about", name: "About" },
];

const Root = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  marginTop: APP_BAR_HEIGHT,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `${DRAWER_WIDTH}px`,
  ...(!open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Footer = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  height: FOOTER_HEIGHT,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3),

  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `${DRAWER_WIDTH}px`,
  ...(!open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Layout: FC<Props> = ({ children }) => {
  const [open, toggle] = useReducer((open) => !open, false);
  return (
    <Root>
      <CssBaseline />
      <NavBar open={open} handleOpen={toggle} />
      <Sidebar
        open={open}
        handleDrawerClose={toggle}
        defaultPaths={defaultPaths}
      />
      <Main open={open}>{children}</Main>
      <Footer open={open}>{FOOTER_TEXT}</Footer>
    </Root>
  );
};

export default Layout;
