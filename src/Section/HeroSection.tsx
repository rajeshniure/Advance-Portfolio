import { Box, Grid, Typography, IconButton, Stack, Button } from "@mui/material";
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/material/styles';
import { useScrollAnimationLeft, useScrollAnimationRight } from '../hooks/useScrollAnimation';
// Updated to use direct path from public directory
const profileImg = '/assets/images/profile2.png';
import { handleDownload } from "../hooks/usedownload";
import { Link } from "react-scroll";

const socialLinks = [
  { icon: <GitHubIcon />, url: 'https://github.com/rajeshniure', label: 'GitHub' },
  { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/rajeshniure/', label: 'LinkedIn' },
  { icon: <InstagramIcon />, url: 'https://www.instagram.com/raj_niure/', label: 'Instagram' },
];

const HeroSection = () => {
  const theme = useTheme();
  const imageAnimation = useScrollAnimationRight(3);
  const textAnimation = useScrollAnimationLeft(1);


  return (
    <Box id="home" sx={{ minHeight: { xs: 0, md: '100vh' }, display: 'flex', alignItems: 'center', justifyContent: 'center', pt: { xs: 10, md: 0 } }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center" width={{ xs: '90%', md: '70%' }} sx={{mx: { xs: 0, lg: '16rem' }}}>
        <Grid size={{ xs: 12, md: 6 }}
          sx={{
            order: { xs: 1, md: 2 },
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' }
          }}
        >
          <motion.div
            ref={imageAnimation.ref}
            initial={imageAnimation.initial}
            animate={imageAnimation.animate}
            transition={imageAnimation.transition}
          >
            <Box
              sx={{
                width: { xs: 220, md: 320 },
                height: { xs: 220, md: 320 },
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}22 0%, ${theme.palette.secondary.main}22 100%)`,
                transition: 'transform 0.5s',
                animation: 'float 3s ease-in-out infinite',
                '&:hover': {
                  transform: 'scale(1.04) rotate(2deg)',
                  boxShadow: 12,
                },
                '@keyframes float': {
                  '0%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-18px)' },
                  '100%': { transform: 'translateY(0px)' },
                },
              }}
            >
              <img
                src={profileImg}
                alt="Rajesh Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                draggable={false}
              />
            </Box>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}
          sx={{
            order: { xs: 2, md: 1 }
          }}
        >
          <motion.div
            ref={textAnimation.ref}
            initial={textAnimation.initial}
            animate={textAnimation.animate}
            transition={textAnimation.transition}
          >
            <Box>
              <Typography variant="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2, fontSize: { xs: '2.2rem', md: '3rem' } }}>
                Hi, I'm Rajesh Niure
              </Typography>
              <Button variant="contained" sx={{ color: 'white', mb: 2, fontWeight: 600, fontSize: { xs: '0.8rem', md: '1.2rem' }, backgroundColor: 'secondary.main' }}>
                Web Developer
              </Button>
              <Typography variant="body1" textAlign="justify" sx={{ color: 'text.secondary', mb: 3, maxWidth: 500, fontSize: { xs: '0.9rem', md: '1.3rem' } }}>
                Passionate Web developer with experience in building scalable web applications. Skilled in React, JavaScript, Django, Python, and database management, with a strong focus on performance, security, and clean code architecture.
              </Typography>
              <Stack direction="row" spacing={2} mb={2}>
                <Link to="contact" smooth duration={500} style={{ textDecoration: "none", color: "inherit" }}>
                <Button variant="contained" sx={{ color: 'white', fontWeight: 600, backgroundColor: 'secondary.main', fontSize: { xs: '0.8rem', md: '1.2rem' } }}>
                  Hire Me
                </Button>
                </Link>
                <Button variant="outlined" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: { xs: '0.8rem', md: '1.2rem' } }} onClick={handleDownload}>
                  Download Resume
                </Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                {socialLinks.map((item) => (
                  <IconButton
                    key={item.label}
                    component="a"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    sx={{
                      color: theme.palette.text.primary,
                      bgcolor: 'background.paper',
                      boxShadow: 2,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'scale(1.15) rotate(-6deg)',
                        boxShadow: 4,
                        bgcolor: 'background.paper',
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;