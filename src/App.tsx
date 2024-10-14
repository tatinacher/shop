import { useReducer } from "react";
import { Switch, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header } from "./ui/header";
import { theme } from "./app/theme";

const menu = [
  {
    name: "Home",
    id: "main",
  },
  {
    name: "Catalog",
    id: "catalog",
  },
  {
    name: "About",
    id: "about",
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
      <Outlet />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
