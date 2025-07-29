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
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-scroll";

import {useColorMode} from "../ThemeContext";
import { useActiveSection } from '../hooks/useActiveSection';
import { handleDownload } from "../hooks/usedownload";

 

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Certificates", to: "certifications" },
  { label: "Contact", to: "contact" },
];

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const activeSection = useActiveSection();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const { toggleColorMode } = useColorMode();



  const HamburgerIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="6" width="28" height="2.5" rx="1.25" fill="currentColor"/>
      <rect y="13" width="28" height="2.5" rx="1.25" fill="currentColor"/>
      <rect y="20" width="28" height="2.5" rx="1.25" fill="currentColor"/>
    </svg>
  );
  const CloseIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="7" y1="7" x2="21" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="21" y1="7" x2="7" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );

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
          <HamburgerIcon />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        slotProps={{
          paper: {
            sx: {
              background: theme.palette.mode === 'dark'
                ? 'rgba(24, 24, 24, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              border: 'none',
              transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
            }
          }
        }}
      >
        <Box sx={{ width: 260, p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Close icon at top right */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={toggleDrawer} sx={{ color: 'text.secondary' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List sx={{ flex: 1 }}>
            {navItems.map((item) => (
              <List key={item.to} onClick={toggleDrawer} disablePadding>
                <Link to={item.to} smooth duration={100} style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      py: 2.2,
                      px: 2,
                      borderRadius: 2,
                      color: theme.palette.text.primary,
                      fontWeight: 500,
                      fontSize: '1.15rem',
                      letterSpacing: 0.5,
                      cursor: 'pointer',
                      transition: 'background 0.2s, color 0.2s',
                      '&:hover': {
                        background: theme.palette.action.hover,
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
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
              color: activeSection === item.to ? theme.palette.primary.main : theme.palette.text.secondary,
              fontWeight: 600,
              cursor: "pointer",
              gap: 2,
              margin: "0 1rem",
              fontSize: "1rem",
              position: "relative",
              borderBottom: activeSection === item.to ? "2px solid" : "none",
              borderColor: activeSection === item.to ? theme.palette.primary.main : "transparent",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            <Link
              to={item.to}
              smooth
              duration={500}
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
          onClick={handleDownload}
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
