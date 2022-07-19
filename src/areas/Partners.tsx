import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { partners } from "../data/dummyData";
import { styled } from "@mui/system";

export const Partners = () => {
  return (
    <Grid item marginX={"auto"}>
      <Grid item>
        <Typography
          variant={"h6"}
          color={(theme) => theme.palette.secondary.dark}
        >
          Thank you to our current partners:
        </Typography>
      </Grid>

      <Grid container flexDirection={"column"}>
        {partners?.map((partner) => (
          <Grid item marginY={1} key={partner}>
            <Typography
              color={(theme) => theme.palette.secondary.light}
              letterSpacing={"0.1em"}
              variant={"body2"}
            >
              {partner}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {partners && (
        <Grid item marginTop={1}>
          <StyledLink>See All Partners</StyledLink>
        </Grid>
      )}
    </Grid>
  );
};

const StyledLink = styled(Link)(
  ({ theme }) => `
    color: ${theme.palette.secondary.main}
    `
);
