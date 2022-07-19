import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Partners } from "./Partners";

export const JoinTheMovement = () => {
  return (
    <Grid container marginTop={7} paddingBottom={10}>
      <Grid item md={8}>
        <Typography
          component={"h2"}
          marginBottom={5}
          variant={"h2"}
          width={"80%"}
        >
          Help us change the face and voice of the marketing industry.
        </Typography>
        <StyledButton>Join the movement</StyledButton>
      </Grid>

      <Partners />
    </Grid>
  );
};

export const StyledButton = styled(Button)`
  font-size: larger;
  padding: 0.5rem 2rem;
`;
