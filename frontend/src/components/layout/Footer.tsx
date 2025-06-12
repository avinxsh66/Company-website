import { Container, Typography, Box, Link } from '@mui/material';
import truwaveLogo from '../../assets/placeholders/truwavelogo.jpeg'; 

function Footer() {
  return (
    <Box sx={{ bgcolor: '#09306b', color: 'white', py: 3 }}>      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <img
            src={truwaveLogo}
            alt="Trubackflow Logo"
            style={{ height: '30px' }}
          />
        </Box>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Truwave. All rights reserved.
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Link href="/privacy" color="inherit" underline="hover">
            Privacy Policy
          </Link>
          <Link href="/terms" color="inherit" underline="hover">
            Terms of Use
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;