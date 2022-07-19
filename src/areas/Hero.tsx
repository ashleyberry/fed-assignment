import React from "react";
import { Button, Grid, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Grid item marginTop={25}>
      <Typography
        marginX={"auto"}
        width={"80%"}
        textAlign={"center"}
        color={(theme) => theme.palette.text.secondary}
        variant="h2"
        component="h1"
      >
        We believe in a future industry that reaches new heights through the
        creativity of people of any race or socioeconomic background.
      </Typography>

      <Grid item marginTop={5} textAlign={"center"}>
        <Button onClick={() => console.log("clicked button")}>
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
};
