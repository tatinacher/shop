import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#f2f2f2",
      light: "#161614",
    },
    secondary: {
      main: "#3b3a38",
    },
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      //   background: "#1C1C1C",
      //   text: "#f0f0f0",
    },
    secondary: {
      main: green[500],
    },
    mode: "dark",
  },
});

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
