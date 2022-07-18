import { createTheme } from "@mui/material";

export const brandBlue = "#272C44";
export const brandGreen = "#BFCA38";
export const brandGrey = "#52596D";
export const backgroundColor = "#E5E5E5";
export const headingColor = "#52596D";
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
    },
    text: {
      primary: headingColor,
      secondary: white,
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
    fontFamily: ["Cabin", "sans-serif", "Felix", "serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 900,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      fontWeight: 400,
    },
  },
});
