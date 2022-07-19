import React from "react";
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { SecondaryHeaderMenuItem } from "./SecondaryHeaderItem";
import backgroundImage from "./../assets/background-image.png";
import logo from "./../assets/the-brand-lab-logo.png";
import { secondaryMenuItems } from "../data/dummyData";
import { styled } from "@mui/system";
import { OurPrograms } from "./OurPrograms";

export const SecondaryHeaderAppBar = () => {
  return (
    <StyledAppBar position={"absolute"}>
      <StyledToolbar>
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
      </StyledToolbar>
    </StyledAppBar>
  );
};

// we're exporting our styled components here so that we can use them in other files.
// I could move this to a "shared" directory, but as this is a small project,
// I'm going to keep them in the same file as the component that uses them.
export const StyledAppBar = styled(AppBar)`
  position: relative;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  justify-content: center;
  box-shadow: none;
`;

export const StyledToolbar = styled(Toolbar)`
  width: 90%;
  margin: 0 auto;
`;
