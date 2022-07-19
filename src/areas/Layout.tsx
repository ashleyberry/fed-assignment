import React from "react";
import { HeaderAppBar } from "./HeaderAppBar";
import { SecondaryHeaderAppBar } from "./SecondaryHeaderAppBar";
import { OurPrograms } from "./OurPrograms";
import { Hero } from "./Hero";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import backgroundImage from "../assets/background-image.png";
import { JoinTheMovement } from "./JoinTheMovement";

export const Layout = () => {
  return (
    <>
      <HeaderAppBar />
      <SecondaryHeaderAppBar />
      <StyledGrid>
        <Grid item marginX={"auto"} width={"75%"}>
          <Hero />
          <OurPrograms />
          <JoinTheMovement />
        </Grid>
      </StyledGrid>
    </>
  );
};

export const StyledGrid = styled(Grid)`
  position: absolute;
  top: 4rem;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  height: 80vh;
  background-size: cover;
  justify-content: center;
`;
