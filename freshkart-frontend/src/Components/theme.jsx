import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6A9A67", // Asparagus
    },
    secondary: {
      main: "#FFDC5E", // Mustard
    },
    background: {
      default: "#6A9A67", // Background Asparagus
      paper: "#F5E5C0", // Card Dutch White
    },
    text: {
      primary: "#485D3F", // Hunter Green
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;
