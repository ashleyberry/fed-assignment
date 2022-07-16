import React, { FC } from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

export type OurProgramsProps = {};

export const OurPrograms: FC<OurProgramsProps> = () => {
  return (
    <StyledPaper>
      <Typography fontWeight={"bold"} textAlign={"center"}>
        Our Programs
      </Typography>
    </StyledPaper>
  );
};

export const StyledPaper = styled(Paper)`
  bottom: 20px;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 75%;
`;
