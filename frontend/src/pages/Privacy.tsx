import { Container, Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Truwave</title>
        <meta name="description" content="Trubackflow's privacy policy outlines how we handle your data." />
      </Helmet>
      <Container sx={{ py: 6 }}>
        <Typography variant="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1">
          This is a placeholder for Truwave's Privacy Policy. We are committed to protecting your data and privacy. Please contact us for more details.
        </Typography>
      </Container>
    </>
  );
}

export default Privacy;