// src/theme.js
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h2: {
      fontWeight: 800,
      fontSize: "2rem",
      lineHeight: 1.1,
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontWeight: 900,
      fontSize: "2.75rem",
      lineHeight: 1,
      "@media (min-width:600px)": {
        fontSize: "3.25rem",
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.2,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.4,
      "@media (max-width:600px)": {
        fontSize: "0.75rem",
      },
    },
  },

  palette: {
    mode: "light",
    primary: {
      main: "#0D50FF",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F3F4F6",
    },
    text: {
      primary: "#111111",
      secondary: "rgba(0,0,0,0.6)",
    },
    grey: {
      100: "#F3F4F6",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: "#F3F4F6",
          borderRadius: 12,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          color: "#111111",
        },
        notchedOutline: {
          borderColor: "#E6E6E6",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#9A9A9A",
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          minHeight: "1.25rem",
          lineHeight: "1.25rem",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: 10,
        },
        containedPrimary: {
          boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
        },
      },
    },
  },
});
