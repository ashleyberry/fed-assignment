import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

export type JoinTheMovementProps = {};

export const JoinTheMovement: FC<JoinTheMovementProps> = (props) => {
  return (
    <StyledGridContainer container>
      <Grid item md={8}>
        <Typography component={"h2"} variant={"h2"}>
          Help us change the face and voice of the marketing industry.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>Thank you to our current partners:</Typography>
      </Grid>
    </StyledGridContainer>
  );
};

export const StyledGridContainer = styled(Grid)`
  width: 75%;
  margin: 0 auto;
`;
