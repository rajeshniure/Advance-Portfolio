import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { useState, useCallback, useRef } from "react";
import type { FormEvent } from "react";
import { Link } from "react-scroll";
import emailjs from "emailjs-com"; 

const contact = '/assets/images/contact.webp';

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMsg(null);
    setErrorMsg(null);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_rg0rlfi",   
        "template_ybgb37v", 
        formRef.current,
        "I2HHD3zuwt-LEXcnJ"
      );

      setSuccessMsg("✅ Message sent successfully! I'll get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setErrorMsg("❌ Failed to send message. Please try again later.");
    }
  }, []);

  return (
    <Box id="contact" sx={{ 
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center', 
      pt: {xs:8,md:10},
      pb: {xs:0,md:10},
      px: { xs: 1, sm: 3, md: 4 },
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 2, md: 4 } }} className="top-header">
          <Link to="contact" smooth duration={500} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <Typography variant="h4" color="text.secondary" fontWeight={700} sx={{display:"inline-block", fontSize:{xs:"1.6rem",md:"1.8rem"},fontFamily:"monospace",borderBottom:"4px solid",borderColor:"secondary.main",borderRadius:0.5 }}>
              Get In Touch
            </Typography>
          </Link>
          <Typography variant="body1" align="center" maxWidth="sm" mx="auto" color="text.secondary" mt={1} fontFamily="monospace" fontSize={{xs:"0.8rem",md:"1rem"}}>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </Typography>
        </Box>

        <Grid container spacing={{xs: 2, md: 4}} justifyContent="center" alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} className="form-control">
            <Box
              component="form"
              ref={formRef}
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
            {successMsg && (
              <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                {successMsg}
              </Typography>
            )}
            {errorMsg && (
              <Typography variant="body2" color="error.main" sx={{ mt: 1 }}>
                {errorMsg}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SendIcon fontSize="small" />}
              sx={{ mt: 2, fontWeight: 600, fontSize: { xs: '0.9rem', md: '1.1rem' }, borderRadius: 1 }}
            >
              Send Message
            </Button>
          </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }} className="contact-info">
            <Box sx={{ width: '100%', height: '100%' }}>
              <img
                src={contact}
                alt="contact"
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
      </Container>
    </Box>
  );
};

export default Contact;
