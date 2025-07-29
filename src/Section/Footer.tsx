import React from "react";
import { Box, Typography, Link, IconButton, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", color: "text.secondary", pt: 6, pb: 3 }}>
      {/* Top Footer */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Link href="#home" underline="none" color="inherit">
          <Typography variant="h6" fontWeight="bold">Rajesh Niure</Typography>
        </Link>
      </Box>

      {/* Middle Footer - Menu */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              color="inherit"
              underline="hover"
              sx={{ textTransform: "capitalize", fontSize: "0.95rem" }}
            >
              {section}
            </Link>
          ))}
        </Stack>
      </Box>

      {/* Social Icons */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            component="a"
            href="https://www.instagram.com/raj_niure/"
            rel="noopener noreferrer"
            sx={{ color: "#E1306C" }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/rajeshniure/"
            rel="noopener noreferrer"
            sx={{ color: "#0077b5" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/rajeshniure"
            rel="noopener noreferrer"
            sx={{ color: "text.secondary" }}
          >
            <GitHubIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* Bottom Footer */}
      <Box sx={{ textAlign: "center", fontSize: "0.85rem", color: "gray" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()}{" "}
          <Link href="#home" underline="hover" color="inherit">
            Rajesh Niure
          </Link>{" "}
          - All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
