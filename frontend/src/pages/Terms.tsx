import { Container, Typography,  } from '@mui/material';
import { Helmet } from 'react-helmet-async';

function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use - Trubackflow</title>
        <meta name="description" content="Trubackflow's terms of use for our software and services." />
      </Helmet>
      <Container sx={{ py: 6 }}>
        <Typography variant="h1" gutterBottom>
          Terms of Use
        </Typography>
        <Typography variant="body1">
          This is a placeholder for Trubackflow's Terms of Use. Please contact us for more details.
        </Typography>
      </Container>
    </>
  );
}

export default Terms;