import React from "react";
import { ThemeProvider } from "@mui/material";
import { Layout } from "./areas/Layout";
import { appTheme } from "./AppTheme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
