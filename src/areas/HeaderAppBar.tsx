import React from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";
import { mainMenuItems } from "../data/dummyData";

export const HeaderAppBar = () => {
  const socialIcons = [
    { name: "Facebook", icon: <Facebook /> },
    { name: "Twitter,", icon: <Twitter /> },
    { name: "YouTube", icon: <YouTube /> },
  ];

  return (
    <AppBar position="static">
      <Toolbar sx={{ marginX: "auto", width: "90%", zIndex: 2 }}>
        <Grid
          alignContent={"center"}
          container
          justifyContent={"flex-end"}
          marginY={"auto"}
        >
          {socialIcons.map((socialIcon) => (
            <IconButton
              color="inherit"
              onClick={() => console.log("social icon clicked")}
              size="large"
            >
              {socialIcon.icon}
            </IconButton>
          ))}

          {mainMenuItems.map((menuItem) => (
            <MenuItem onClick={() => console.log(menuItem)}>
              <Typography paddingY={0}>{menuItem.name}</Typography>
            </MenuItem>
          ))}

          <Grid item marginY={"auto"}>
            <Button
              onClick={() => console.log("button clicked")}
              sx={{ paddingX: "15px", paddingY: "4px" }}
            >
              Donate
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
