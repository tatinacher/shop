import { Box, Switch, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "./ui/header";
import { theme } from "./app/theme";
import { RootState } from "./app/store";
import { toggle } from "./features/theme";

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
  const isDarkTheme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "secondary.contrastText",
        }}
      >
        <Header
          menu={menu}
          themeButton={
            <Switch checked={isDarkTheme} onChange={() => dispatch(toggle())} />
          }
        />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
