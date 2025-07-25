import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
  import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    IconButton,
    CircularProgress,
  } from "@mui/material";
  import { useState, type FormEvent } from "react";
  import { useToast } from "../hooks/use-toast";
  
 const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      setTimeout(() => {
        toast({
          message: "Message sent! Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
      }, 1500);
    };
  
    return (
      <Box id="contact" py={12} px={2} sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: { xs: '0', md: '100vh' }, display: 'flex', alignItems: 'center' }}>
        <Box maxWidth="lg" mx="auto" width="100%">
        <Box sx={{ width: '100%', maxWidth: '100%', textAlign: 'center', mb: { xs: 6, md: 8 } }}>
        <Typography variant="h4" color="text.secondary" fontWeight={700}>
          Get In Touch
        </Typography>
        <Box sx={{ height: 6, backgroundColor: 'secondary.main', borderRadius: 4, maxWidth: 200, margin: '0px auto 0 auto' }} />
      </Box>
          <Typography variant="body1" align="center" mb={5} maxWidth="sm" mx="auto" color="text.secondary">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </Typography>
          <Grid container spacing={5} justifyContent="center">
            <Grid size={{xs:12,md:6}} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Box my={7} p={2} >
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Box display="flex" alignItems="center" mb={3}>
                  <Box p={1} bgcolor="secondary.main" borderRadius="50%" mr={2} boxShadow={2}>
                    <EmailIcon fontSize="medium" sx={{ color: '#fff' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2">Email</Typography>
                    <a href="mailto:hello@gmail.com" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>hello@gmail.com</a>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" mb={3}>
                  <Box p={1} bgcolor="secondary.main" borderRadius="50%" mr={2} boxShadow={2}>
                    <PhoneIcon fontSize="medium" sx={{ color: '#fff' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2">Phone</Typography>
                    <a href="tel:+11234567890" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>+1 (123) 456-7890</a>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" mb={3}>
                  <Box p={1} bgcolor="secondary.main" borderRadius="50%" mr={2} boxShadow={2}>
                    <LocationOnIcon fontSize="medium" sx={{ color: '#fff' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2">Location</Typography>
                    <Typography variant="body2">Vancouver, BC, Canada</Typography>
                  </Box>
                </Box>
                <Box mt={4}>
                  <Typography variant="subtitle2" gutterBottom>
                    Connect With Me
                  </Typography>
                  <Box display="flex" gap={2}>
                    <IconButton
                      component="a"
                      href="#"
                      target="_blank"
                      aria-label="LinkedIn"
                      sx={{
                        color: 'text.primary',
                        bgcolor: 'background.paper',
                        boxShadow: 2,
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'scale(1.15) rotate(-6deg)',
                          boxShadow: 4,
                          bgcolor: 'background.paper',
                        },
                      }}
                    >
                      <LinkedInIcon fontSize="medium" />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="#"
                      target="_blank"
                      aria-label="GitHub"
                      sx={{
                        color: 'text.primary',
                        bgcolor: 'background.paper',
                        boxShadow: 2,
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'scale(1.15) rotate(-6deg)',
                          boxShadow: 4,
                          bgcolor: 'background.paper',
                        },
                      }}
                    >
                      <GitHubIcon fontSize="medium" />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="#"
                      target="_blank"
                      aria-label="Instagram"
                      sx={{
                        color: 'text.primary',
                        bgcolor: 'background.paper',
                        boxShadow: 2,
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'scale(1.15) rotate(-6deg)',
                          boxShadow: 4,
                          bgcolor: 'background.paper',
                        },
                      }}
                    >
                      <InstagramIcon fontSize="medium" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid size={{xs:12,md:6}}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                bgcolor="background.paper"
                p={4}
                borderRadius={2}
                boxShadow={4}
              >
                <Typography variant="h6" gutterBottom>
                  Send a Message
                </Typography>
                <TextField
                  label="Your Name"
                  name="name"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Your Email"
                  name="email"
                  type="email"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={
                    isSubmitting ? <CircularProgress size={16} color="inherit" /> : <SendIcon fontSize="small" />
                  }
                  disabled={isSubmitting}
                  sx={{ mt: 2, fontWeight: 600, fontSize: { xs: '0.9rem', md: '1.1rem' }, borderRadius: 1 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };
  
  export default Contact;