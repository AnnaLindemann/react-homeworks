import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    subtitle1: {
      fontWeight: 500,
      fontSize: "1.25rem", // 20px
      lineHeight: 1.2,
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },

  palette: {
    mode: "light",
    primary: {
      main: "#0B5ED7",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111111",
      secondary: "rgba(0,0,0,0.75)",
    },
    divider: "rgba(0,0,0,0.08)",
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#111111",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 100,
        },
      },
    },
  },
});
