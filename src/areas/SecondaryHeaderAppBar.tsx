import React from "react";
import { AppBar, Grid, MenuItem, Toolbar } from "@mui/material";

export const SecondaryHeaderAppBar = () => {
  const menuItems = ["Impact", "Programs", "Join the Movement", "Job Board"];

  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ marginX: "auto", width: "89%" }}>
        <Grid container justifyContent={"space-between"}>
          <img alt={"BrandLab Logo"} src={"/assets/the-brand-lab-logo.png"} />

          <Grid item>
            <Grid container spacing={7}>
              {menuItems.map((menuItem) => (
                <Grid item key={menuItem}>
                  <MenuItem
                    onClick={() => console.log("clicked")}
                    sx={{ p: 0 }}
                  >
                    {menuItem}
                  </MenuItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
