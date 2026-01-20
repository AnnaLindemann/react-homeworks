import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",

    h2: {
      fontWeight: 600,
      fontSize: "2.5rem", 
      lineHeight: 1.1,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },

    h3: {
      fontWeight: 700,
      fontSize: "2.5rem", 
      lineHeight: 1.1,
      "@media (max-width:600px)": {
        fontSize: "1.5rem", 
        fontWeight: 600,
      },
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
    main: "rgba(18, 80, 243, 1)", 
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
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#F3F4F6",
          borderRadius: 12,
        },
      },
    },
  },
});
