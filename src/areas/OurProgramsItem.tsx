import React, { FC } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { OurProgramsItemType } from "../data/dummyData";

export type OurProgramsItemProps = {
  item: OurProgramsItemType;
};

export const OurProgramsItem: FC<OurProgramsItemProps> = ({ item }) => {
  return (
    <Grid item justifyContent={"center"} overflow={"hidden"} width={"25%"}>
      <img src={item.imageUrl} alt={item.name} />
      <StyledBox>
        <Typography
          letterSpacing={2}
          fontSize={".75em"}
          textAlign={"center"}
          textTransform={"uppercase"}
        >
          {item.name}
        </Typography>
        <Grid container>{item.description}</Grid>
      </StyledBox>
    </Grid>
  );
};

export const StyledBox = styled(Box)`
  padding: 0.75rem 0.5rem 1.5rem;
`;
