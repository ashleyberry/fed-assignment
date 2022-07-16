import React from "react";
import { AppBar, Grid, Toolbar } from "@mui/material";
import { SecondaryHeaderMenuItem } from "./SecondaryHeaderItem";
import backgroundImage from "./../assets/background-image.png";
import logo from "./../assets/the-brand-lab-logo.png";

export type HeaderMenuItem = {
  name: string;
  subMenuItemList?: string[];
};

export const SecondaryHeaderAppBar = () => {
  const menuItems: HeaderMenuItem[] = [
    {
      name: "Impact",
      subMenuItemList: [
        "Annual Report",
        "BrandLab Stories",
        "State of the Industry",
      ],
    },
    { name: "Programs", subMenuItemList: ["Item 1", "Item 2", "Item 3"] },
    {
      name: "Join the Movement",
      subMenuItemList: ["Item 1", "Item 2", "Item 3"],
    },
    { name: "Job Board", subMenuItemList: ["Item 1", "Item 2", "Item 3"] },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "80vh",
      }}
    >
      <Toolbar disableGutters sx={{ marginX: "auto", width: "89%" }}>
        <Grid container justifyContent={"space-between"}>
          <img alt={"BrandLab Logo"} src={logo} />

          <Grid item>
            <Grid container spacing={7}>
              {menuItems.map((menuItem) => (
                <SecondaryHeaderMenuItem menuItem={menuItem} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
