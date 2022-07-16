import React from "react";
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { SecondaryHeaderMenuItem } from "./SecondaryHeaderItem";
import backgroundImage from "./../assets/background-image.png";
import logo from "./../assets/the-brand-lab-logo.png";
import { secondaryMenuItems } from "../data/dummyData";

export type HeaderMenuItem = {
  name: string;
  subMenuItemList?: string[];
};

export const SecondaryHeaderAppBar = () => {
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
              {secondaryMenuItems.map((menuItem) => (
                <SecondaryHeaderMenuItem menuItem={menuItem} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Grid justifyContent={"center"} marginX={50} marginY={"auto"}>
        <Grid item>
          <Typography
            textAlign={"center"}
            fontFamily={"Felix"}
            fontSize={"2em"}
          >
            We believe in a future industry that reaches new heights through the
            creativity of people of any race or socioeconomic background.
          </Typography>
        </Grid>
        <Grid item marginTop={5} textAlign={"center"}>
          <Button onClick={() => console.log("clicked button")}>
            <Typography
              fontSize={18}
              paddingX={2}
              paddingY={0.5}
              textTransform={"none"}
              fontWeight={"bold"}
            >
              Learn More
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
};
