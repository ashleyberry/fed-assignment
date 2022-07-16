import { createTheme } from "@mui/material";

export const brandBlue = "#272C44";
export const brandGreen = "#BFCA38";
export const brandGrey = "#52596D";
export const backgroundColor = "#E5E5E5";

export const appTheme = createTheme({
  palette: {
    background: {
      default: backgroundColor,
    },
    primary: {
      main: brandBlue,
    },
    secondary: {
      main: brandGrey,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: brandGreen,
          fontSize: "1rem",
          borderRadius: "50px",
          "&:hover": {
            backgroundColor: brandGreen,
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: brandBlue,
          color: "#fff",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          justifyContent: "center",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Cabin", "sans-serif", "Felix", "serif"].join(","),
  },
});
