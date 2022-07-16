import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";

export type OurProgramsItemProps = {};

export const OurProgramsItem: FC<OurProgramsItemProps> = (props) => {
  return (
    <Grid container>
      <Grid item>
        <Typography>OurProgramsItem</Typography>
      </Grid>
    </Grid>
  );
};
