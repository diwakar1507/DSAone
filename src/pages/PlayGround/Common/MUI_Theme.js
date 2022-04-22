import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#222831",
      light: "#393E46",
    },
    secondary: {
      main: "#FD7014",
    },
    background: {
      default: "#222831",
      paper: "#393E46",
    },
    text: {
      primary: "#eeeeee",
      secondary: "#D1D1D1",
    },
    divider: "rgba(0,0,0,0.26)",
  },
  typography: {
    fontSize: 24,
    htmlFontSize: 24,
  },
});
