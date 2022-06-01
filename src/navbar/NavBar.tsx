import React, { FC } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./navbar.css";

// Mui Imports
import MenuIcon from "@mui/icons-material/Menu";
import { PaletteOptions, styled } from "@mui/material";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { Box } from "@mui/system";
import { DRAWER_WIDTH } from "../utils/constants";

export interface INavPaths {
  url: string;
  name: string;
}

const appBarStyle = {
  height: "120px",
  color: "white",
  display: "flex",
  justifyContent: "center",
};

interface Props {
  open: boolean;
  handleOpen: React.DispatchWithoutAction;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavBar = ({ open, handleOpen }: Props) => {
  return (
    /* TODO: Complete side nav  */

    <AppBar sx={appBarStyle} position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={handleOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          BIZA
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
