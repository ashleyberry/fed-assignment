import React, { FC } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ourProgramsItems } from "../data/dummyData";
import { OurProgramsItem } from "./OurProgramsItem";

export type OurProgramsProps = {};

export const OurPrograms: FC<OurProgramsProps> = () => {
  return (
    <StyledPaper>
      <Typography
        variant={"h6"}
        component={"h2"}
        marginY={2}
        textAlign={"center"}
      >
        Our Programs
      </Typography>

      <Grid container>
        {ourProgramsItems.map((item) => (
          <OurProgramsItem key={item.name} item={item} />
        ))}
      </Grid>
    </StyledPaper>
  );
};

export const StyledPaper = styled(Paper)`
  border: 3px solid #eeeeee;
  border-radius: 8px;
  bottom: -15rem;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 75%;
`;
