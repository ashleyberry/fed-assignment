import React from "react";
import { ThemeProvider, responsiveFontSizes } from "@mui/material";
import { Layout } from "./areas/Layout";
import { appTheme } from "./AppTheme";

function App() {
  const theme = responsiveFontSizes(appTheme);
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
