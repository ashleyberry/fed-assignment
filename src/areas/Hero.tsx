import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import backgroundImage from "../assets/background-image.png";

export const Hero = () => {
  return (
    <StyledGrid justifyContent={"center"}>
      <Grid item marginTop={25}>
        <Typography
          marginX={"auto"}
          width={"50%"}
          textAlign={"center"}
          color={(theme) => theme.palette.text.secondary}
          variant="h4"
          component="h1"
        >
          We believe in a future industry that reaches new heights through the
          creativity of people of any race or socioeconomic background.
        </Typography>
      </Grid>

      <Grid item marginTop={5} textAlign={"center"}>
        <Button onClick={() => console.log("clicked button")}>
          Learn More
        </Button>
      </Grid>
    </StyledGrid>
  );
};

export const StyledGrid = styled(Grid)`
  position: absolute;
  top: 4rem;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  height: 900px;
  background-size: contain;
  justify-content: center;
`;
