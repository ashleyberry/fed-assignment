import { createTheme } from "@mui/material";

export const backgroundColor = "#E5E5E5";
export const brandBlue = "#272C44";
export const brandDarkGrey = "#333333";
export const brandGreen = "#BFCA38";
export const brandGrey = "#52596D";
export const brandLightGrey = "#666666";
export const brandHeadingColor = "#52596D";
export const white = "#FFFFFF";

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
      dark: brandDarkGrey,
      light: brandLightGrey,
    },
    text: {
      primary: brandHeadingColor,
      secondary: white,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: brandGreen,
          fontSize: "large",
          fontWeight: "bold",
          borderRadius: "50px",
          padding: "0.25rem 1rem",
          textTransform: "none",
          "&:hover": {
            backgroundColor: brandGreen,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          textDecorationColor: brandGreen,
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
    fontFamily: ["Cabin", "sans-serif", "Fenix", "serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 900,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontFamily: ["Fenix", "serif"].join(","),
      color: brandGrey,
      fontSize: "3em",
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 500,
      fontFamily: ["Fenix", "serif"].join(","),
      fontSize: "2.5em",
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
      fontSize: "1em",
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      letterSpacing: "0.25em",
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },
});
