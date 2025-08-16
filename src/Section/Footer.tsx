
import { Box, Typography, IconButton, Stack, Card } from "@mui/material";
import { Link } from "react-scroll";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const Footer: React.FC = () => {
  return (
    
    <Card component="footer" elevation={3} sx={{ backgroundColor: "background.default", color: "text.secondary", pt: 1, pb: 1, borderRadius: 0}}>

      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          style={{ textDecoration: "none", color: "inherit", cursor: 'pointer' }}
        >
          <Typography variant="h6" fontWeight="bold">Rajesh Niure</Typography>
        </Link>
      </Box>


      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
          {["home", "about", "skills", "projects", "certifications", "contact"].map((section) => (
            <Box
              key={section}
              sx={{
                textDecoration: "none",
                color: "inherit",
                textTransform: "capitalize",
                fontSize: "0.95rem",
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <Link
                to={section}
                smooth
                duration={500}
                offset={-80}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {section}
              </Link>
            </Box>
          ))}
        </Stack>
      </Box>


      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            component="a"
            href="https://www.instagram.com/raj_niure/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#E1306C" }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/rajeshniure/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#0077b5" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/rajeshniure"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "text.secondary" }}
          >
            <GitHubIcon />
          </IconButton>
        </Stack>
      </Box>


      <Box sx={{ textAlign: "center", fontSize: "0.85rem", color: "gray" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()}{" "}
          <Link
            to="home"
            smooth
            duration={500}
            offset={-80}
            style={{ 
              textDecoration: "none", 
              color: "inherit", 
              cursor: 'pointer'
            }}
          >
            Rajesh Niure
          </Link>{" "}
          - All rights reserved
        </Typography>
      </Box>
    </Card>
   
  );
};


export default Footer;
