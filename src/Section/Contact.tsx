import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,

  CircularProgress,
} from "@mui/material";
import { useState, useCallback } from "react";
import type { FormEvent } from "react";
import { Link } from "react-scroll";
 

const contact = '/assets/images/contact.webp';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  }, []);

  return (
    <Box id="contact" sx={{ 
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center', 
      pt: {xs:8,md:10},
      pb: {xs:0,md:10},
      px: { xs: 2, md: 4, lg: 8 },
    }}>
      <Box sx={{ 
        width: '100%',
        maxWidth: { md: '1200px' },
        mx: 'auto'
      }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 8 } }}>
          <Link to="contact" smooth duration={500} offset={-80} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <Typography variant="h4" color="text.secondary" fontWeight={700} sx={{fontSize:{xs:"1.75rem",md:"2rem"}}}>
              Get In Touch
            </Typography>
          </Link>
          <Box sx={{ height: 4, backgroundColor: 'secondary.main', borderRadius: 4, maxWidth: 190, mx: 'auto' }} />
        </Box>
        <Typography variant="body1" align="center" mb={5} maxWidth="sm" mx="auto" color="text.secondary">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </Typography>
        <Grid container spacing={{xs: 2, md: 4}} justifyContent="center" alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: "background.paper",
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                boxShadow: 4,
              }}
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
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Box sx={{ width: '100%', height: '100%' }}>
              <img
                src={contact}
                alt="contact"
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;