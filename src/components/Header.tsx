import { AppBar, Toolbar, Typography, Button, Stack, Drawer, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", height: 64 }}>
          {/* Logo */}
          <Typography variant="h6">Kathy Codes</Typography>

          {/* Menu - desktop */}
          <MenuComponent display={{ xs: "none", md: "flex" }} />

          {/* Hamburger - mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Menu - mobile - Drawer */}
      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={toggleMenu}
        slotProps={{
          paper: {
            sx: {
              width: "20%",
              minWidth: "100px",
              overflowX: "hidden",
              ml: "auto",
              p: 1,
              borderRadius: "0 0 0 4px",
            },
          },
        }}
      >
        <Box sx={{ p: 2, position: "relative", height: "32px" }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{
              display: { xs: "flex", md: "none" },
              borderRadius: 0,
              position: "absolute",
              top: "-8px",
              right: "4px",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <MenuComponent display={{ xs: "flex", md: "none" }} />
      </Drawer>
    </>
  );
}

function MenuComponent({ display = { xs: "none", md: "flex" } }) {
  return (
    <Stack
      id="menu"
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 2, md: 6 }}
      sx={{
        display,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        px: { xs: 0, md: 2 },
        py: { xs: 2, md: 0 },
      }}
    >
      <Button color="inherit" href="#home">
        Home
      </Button>
      <Button color="inherit" href="#about">
        About
      </Button>
      <Button color="inherit" href="#skills">
        Skills
      </Button>
      <Button color="inherit" href="#projects">
        Projects
      </Button>
      <Button color="inherit" href="#contact">
        Contact
      </Button>
    </Stack>
  );
}
