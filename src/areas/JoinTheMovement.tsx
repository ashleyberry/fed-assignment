import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Partners } from "./Partners";

export const JoinTheMovement = () => {
  return (
    <StyledGridContainer container>
      <Grid item md={8}>
        <Typography component={"h2"} marginBottom={5} variant={"h2"}>
          Help us change the face and voice of the marketing industry.
        </Typography>
        <StyledButton>Join the movement</StyledButton>
      </Grid>

      <Partners />
    </StyledGridContainer>
  );
};

export const StyledGridContainer = styled(Grid)`
  width: 75%;
  margin: 0 auto 10rem;
`;

export const StyledButton = styled(Button)`
  font-size: larger;
  padding: 0.5rem 2rem;
`;
