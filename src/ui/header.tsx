import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  MenuProps,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SyntheticEvent, useState } from "react";

type MenuType = {
  name: string;
  id: string;
};

interface HeaderProps {
  menu: MenuType[];
  themeButton: React.ReactNode;
}

export const Header = ({ menu, themeButton }: HeaderProps) => {
  const [anchorElNav, setAnchorElNav] = useState<MenuProps["anchorEl"]>(null);

  const handleOpenNavMenu = ({
    currentTarget,
  }: SyntheticEvent<HTMLButtonElement>) => {
    setAnchorElNav(currentTarget);
  };

  const handleCloseNavMenu = ({
    currentTarget,
  }: SyntheticEvent<HTMLButtonElement | HTMLLIElement>) => {
    const id = currentTarget?.dataset?.id;
    let section = null;
    if (id && document) {
      section = document.getElementById(id);
    }
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: 0,
        borderRadius: "10px",
        padding: "30px",
        fontFamily: "Open Sans",
      }}
    >
      <MobileMenu
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        anchorElNav={anchorElNav}
        menu={menu}
      />
      <DesktopMenu
        themeButton={themeButton}
        menu={menu}
        handleCloseNavMenu={handleCloseNavMenu}
      />
    </AppBar>
  );
};

interface MobileMenuProps {
  handleCloseNavMenu: (
    event: SyntheticEvent<HTMLButtonElement | HTMLLIElement>
  ) => void;
  handleOpenNavMenu: (event: SyntheticEvent<HTMLButtonElement>) => void;
  anchorElNav: MenuProps["anchorEl"];
  menu: MenuType[];
}

function MobileMenu({
  anchorElNav,
  handleCloseNavMenu,
  handleOpenNavMenu,
  menu,
}: MobileMenuProps) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {menu.map(({ name, id }) => (
          <MenuItem key={id} onClick={handleCloseNavMenu} data-id={id}>
            <Typography sx={{ textAlign: "center" }}>{name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

function DesktopMenu({
  handleCloseNavMenu,
  menu,
  themeButton,
}: HeaderProps & {
  handleCloseNavMenu: (
    event: SyntheticEvent<HTMLButtonElement | HTMLLIElement>
  ) => void;
}) {
  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          {menu.map(({ name, id }) => (
            <Button
              key={id}
              data-id={id}
              onClick={handleCloseNavMenu}
              //   sx={{ my: 2, color: "primary.text", display: "block" }}
              sx={{ color: "primary.light" }}
            >
              {name}
            </Button>
          ))}
        </div>
        <div>{themeButton}</div>
      </Box>
    </Container>
  );
}
