import { Container, Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactForm from '../components/forms/ContactForm';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Truwave Software - Get in Touch</title>
        <meta
          name="description"
          content="Contact Trubackflow to request a demo or learn more about our backflow software solutions."
        />
      </Helmet>
      <Box
        sx={{
          bgcolor: 'secondary.main',
          py: 6,
          textAlign: 'center',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="h5">
              Request a demo or ask us about our backflow software solutions.
            </Typography>
          </motion.div>
        </Container>
      </Box>
      <Container sx={{ py: 6 }}>
        <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
          <ContactForm />
        </Box>
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Our Office
          </Typography>
          <Typography variant="body1" paragraph>
            Contact us via email at support@truwave.com or call us at 7703293029.
          </Typography>
          <Box
            component="img"
            src="/assets/placeholders/map-placeholder.jpg"
            alt="Trubackflow Office Location Map"
            sx={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
          />
        </Box>
      </Container>
    </>
  );
}

export default Contact;