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

export const HeaderAppBar = () => {
  const socialIcons = [
    { name: "Facebook", icon: <Facebook /> },
    { name: "Twitter,", icon: <Twitter /> },
    { name: "YouTube", icon: <YouTube /> },
  ];
  const pages = ["About", "News", "Contact"];

  return (
    <AppBar position="static">
      <Toolbar sx={{ marginX: "auto", width: "90%" }}>
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

          {pages.map((page) => (
            <MenuItem onClick={() => console.log(page)}>
              <Typography paddingY={0}>{page}</Typography>
            </MenuItem>
          ))}

          <Grid item marginY={"auto"}>
            <Button
              onClick={() => console.log("donate clicked")}
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
