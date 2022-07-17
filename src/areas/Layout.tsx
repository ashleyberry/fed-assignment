import React from "react";
import { HeaderAppBar } from "./HeaderAppBar";
import { SecondaryHeaderAppBar } from "./SecondaryHeaderAppBar";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    //  TODO: remove this. it's just for UI styling to see bottom of absolutely positioned paper
    <Box marginBottom={50}>
      <HeaderAppBar />
      <SecondaryHeaderAppBar />
    </Box>
  );
};
