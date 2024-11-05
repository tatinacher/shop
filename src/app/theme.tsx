import { createTheme } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";

//primary color - buttons, togglers
const primaryLight = green[500];
const primaryTextLight = "#fff";
const primaryDark = green[500];
const primaryTextDark = "#fff";

//surface - background
const darkSurface = "#121317";
const darkTextSurface = "#ffffff";
const lightSurface = "#ffffff";
const lightTextSurface = "#121317";

// box blocks
const darkBlock = grey[700];
const lightBlock = "#f2f2f2";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: primaryLight,
      contrastText: primaryTextLight,
    },
    secondary: {
      main: lightSurface,
      light: lightBlock,
      contrastText: lightTextSurface,
    },
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: primaryDark,
      contrastText: primaryTextDark,
    },
    secondary: {
      main: darkSurface,
      light: darkBlock,
      contrastText: darkTextSurface,
    },
    mode: "dark",
  },
});

// const lightTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#f2f2f2",
//       light: "#161614",
//       // dark: "#fff",
//       // contrastText: "#fff",
//     },
//     secondary: {
//       main: "#3b3a38",
//       light: "#ffffff",
//       contrastText: "#161614",
//     },
//     mode: "light",
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     primary: {
//       main: grey[500],
//       //   background: "#1C1C1C",
//       //   text: "#f0f0f0",
//     },
//     secondary: {
//       main: green[500],
//       light: "#121317",
//       contrastText: "#d7d9dd",
//     },
//     mode: "dark",
//   },
// });

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
