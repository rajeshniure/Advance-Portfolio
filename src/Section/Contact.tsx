import SendIcon from "@mui/icons-material/Send";
import contact from '../assets/images/contact.webp';
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
import { motion } from 'framer-motion';
import { useToast } from "../hooks/use-toast";
import {  useScrollAnimationLeft, useScrollAnimationRight } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formAnimation = useScrollAnimationLeft(1);
  const imageAnimation = useScrollAnimationRight(2);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        message: "Message sent! Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  }, [toast]);

  return (
    <Box id="contact" sx={{ 
      bgcolor: 'transparent', 
      color: 'text.primary', 
      minHeight: "auto", 
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center', 
      pt: {xs:8,md:10},
      pb: {xs:0,md:10},
      px: { xs: 2, md: 4, lg: 8 },
      width: '100%',
      overflow: 'hidden'
    }}>
      <Box sx={{ 
        width: '100%',
        maxWidth: { xs: '100%', md: '1200px' },
        mx: 'auto'
      }}>
        <Box sx={{ width: '100%', maxWidth: '100%', textAlign: 'center', mb: { xs: 3, md: 8 } }}>
          <Typography variant="h4" color="text.secondary" fontWeight={700}>
            Get In Touch
          </Typography>
          <Box sx={{ height: 6, backgroundColor: 'secondary.main', borderRadius: 4, maxWidth: 200, margin: '0px auto 0 auto' }} />
        </Box>
        <Typography variant="body1" align="center" mb={5} maxWidth="sm" mx="auto" color="text.secondary">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </Typography>
        <Grid container spacing={{xs: 2, md: 4}} justifyContent="center" alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              ref={formAnimation.ref}
              initial={formAnimation.initial}
              animate={formAnimation.animate}
              transition={formAnimation.transition}
              style={{ height: '100%', width: '100%' }}
            >
              <Box
                width="100%"
                component="form"
                onSubmit={handleSubmit}
                bgcolor="background.paper"
                p={{ xs: 3, md: 4 }}
                borderRadius={2}
                boxShadow={4}
                sx={{ width: '100%' }}
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
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <motion.div
              ref={imageAnimation.ref}
              initial={imageAnimation.initial}
              animate={imageAnimation.animate}
              transition={imageAnimation.transition}
              style={{ height: '100%', width: '100%' }}
            >
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
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;