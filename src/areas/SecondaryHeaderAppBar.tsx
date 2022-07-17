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
    <StyledAppBar position="static">
      <StyledToolbar disableGutters>
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
      <Grid container justifyContent={"center"} marginY={"auto"}>
        <Grid item>
          <Typography
            marginX={"auto"}
            width={"50%"}
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

      <OurPrograms />
    </StyledAppBar>
  );
};

// we're exporting our styled components here so that we can use them in other files.
// I could move this to a "shared" directory, but as this is a small project,
// I'm going to keep them in the same file as the component that uses them.
export const StyledAppBar = styled(AppBar)`
  padding-top: 1rem;
  position: relative;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  justify-content: center;
`;

export const StyledToolbar = styled(Toolbar)`
  width: 90%;
  margin: 0 auto;
`;
