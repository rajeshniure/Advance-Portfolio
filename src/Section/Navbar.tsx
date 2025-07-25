import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  List,
  ListItemText,
  Drawer,


} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-scroll";

import {useColorMode} from "../ThemeContext";

 

const navItems = [
  { label: "Home", to: "home" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "About", to: "about" },
  { label: "Certificates", to: "certifications" },
  { label: "Contact", to: "contact" },
];

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const { toggleColorMode } = useColorMode();

  return (

<AppBar position="fixed" elevation={0} sx={{backgroundColor: "background.default",  zIndex: 1000 }}>
     <Toolbar sx={{ justifyContent: "space-between", mx:{ xs: 0, sm: 0,lg:"16rem"} }}>
  <Typography variant="h5" sx={{ fontWeight: 600,fontSize:"1.8rem", color: "text.primary", cursor: "pointer" }}>
    <Link to="home" smooth duration={500} style={{ textDecoration: "none", color: "inherit" }}>
      Rajesh
    </Link>
  </Typography>

  {isMobile ? (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <IconButton sx={{ color: "text.secondary" }} onClick={toggleColorMode}>
             {theme.palette.mode === "dark" ? (
          <LightModeIcon />
        ) : (
            <DarkModeIcon />
        )}
        </IconButton>
        <IconButton edge="end" sx={{ color: "text.secondary" }} onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250  }}>
          <List>
            {navItems.map((item) => (
              <List key={item.to} onClick={toggleDrawer}>
                <Link to={item.to} smooth duration={100}>
                 <Box sx={{ padding: "1rem", 
                    textDecoration: "none", 
                    backgroundColor: "transparent",
                    color: theme.palette.text.secondary, 
                    fontWeight: 700,borderBottom: "1px solid", 
                    fontSize: "1.2rem",
                    borderColor: theme.palette.divider ,
                    cursor: "pointer",
                    "&:hover": { color: theme.palette.primary.main, },
                    }}>
                  <ListItemText primary={item.label} />
                  </Box>
                </Link>
              </List>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  ) : (
    <>
      <Box sx={{ display: "flex", gap: 2 }}>
        {navItems.map((item) => (
          <Box
            key={item.to}
            sx={{
              textDecoration: "none",
              color: theme.palette.text.secondary,
              fontWeight: 600,
              cursor: "pointer",
              gap: 2,
              margin: "0 1rem",
              fontSize: "1rem",
              position: "relative",
              "&:hover": {
                color: theme.palette.primary.main,
              },
              "&.active-link": {
                color: theme.palette.primary.main,
                borderBottom: "2px solid",
                borderColor: theme.palette.primary.main,
              },
            }}
          >
            <Link
              to={item.to}
              smooth
              duration={500}
              activeClass="active-link"
              spy
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.label}
            </Link>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="contained"
          size="small"
          startIcon={<DescriptionIcon />}
          href=""
          download
          sx={{ fontSize: "0.9rem",fontWeight: 600, backgroundColor: "secondary.main" }}
        >
          Get Resume
        </Button>

      </Box>
      <Box>
        <IconButton sx={{color:"text.secondary"}} onClick={toggleColorMode}>
     {theme.palette.mode === "dark" ? (
          <LightModeIcon />
        ) : (
            <DarkModeIcon />
        )}
        </IconButton>
      </Box>
    </>
  )}
</Toolbar>

    </AppBar>

  );
};

export default NavBar;
