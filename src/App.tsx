import { useReducer } from "react";
import { Switch, ThemeProvider } from "@mui/material";

import { Header } from "./ui/header";
import { theme } from "./app/theme";
import { Router } from "./app/router";

const menu = [
  {
    name: "Home",
    id: "main",
  },
  {
    name: "Catalog",
    id: "projects",
  },
  {
    name: "About",
    id: "connect",
  },
];

function App() {
  const [isDarkTheme, toggleTheme] = useReducer((is) => !is, false);

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <Header
        menu={menu}
        themeButton={<Switch checked={isDarkTheme} onChange={toggleTheme} />}
      />
      <Router />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
