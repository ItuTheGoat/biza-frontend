import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { FC } from "react";

import { APP_BAR_HEIGHT, DRAWER_WIDTH } from "../utils/constants";
import { INavPaths } from "../navbar/NavBar";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
  handleDrawerClose: React.DispatchWithoutAction;
  defaultPaths: INavPaths[];
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  height: APP_BAR_HEIGHT,
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = ({
  open,
  handleDrawerClose,
  defaultPaths,
}: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: DRAWER_WIDTH,

        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {defaultPaths.map((path, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={path.url}>
                <ListItemText primary={path.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
