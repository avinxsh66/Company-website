import { Container, Typography, Box, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const softwareFeatures = [
  {
    title: 'Test Management',
    description: 'Efficiently manage backflow tests with intuitive tools and real-time tracking.',
  },
  {
    title: 'Billing',
    description: 'Streamlined invoicing and billing processes for your backflow business.',
  },
  {
    title: 'Payment Processing',
    description: 'Secure and seamless payment solutions for your customers.',
  },
];

const techServices = [
  {
    title: 'Web Development',
    description: 'Custom web platforms for scalable and user-friendly solutions.',
    detail: 'We create responsive, scalable web applications using modern frameworks to ensure seamless user experiences across devices.',
    image: 'https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg',
  },
  {
    title: 'Mobile Apps',
    description: 'Mobile applications for technicians and clients on the go.',
    detail: 'Our cross-platform mobile apps enable real-time access to backflow data, helping technicians and clients stay connected anytime, anywhere.',
    image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740',
  },
  {
    title: 'AI/ML',
    description: 'Intelligent analytics and predictive maintenance for backflow systems.',
    detail: 'We leverage AI and machine learning to predict maintenance needs, optimize workflows, and provide actionable insights for your backflow systems.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQFe6CQy7ohrUA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1662384940934?e=2147483647&v=beta&t=AN2DRkqCdgkfEPwDEHG-7faKqFSDSSlzN79D0QOT4D4',
  },
  {
    title: 'DevOps',
    description: 'Reliable cloud hosting and continuous delivery for your software.',
    detail: 'Our DevOps practices ensure continuous integration, deployment, and monitoring, keeping your software reliable and up-to-date with minimal downtime.',
    image: 'https://wallpaperaccess.com/full/2648921.jpg',
  },
];

function Services() {
  return (
    <>
      <Helmet>
        <title>Services - Trubackflow Software Solutions</title>
        <meta
          name="description"
          content="Discover Trubackflow's all-in-one backflow software and tech services, including web development, mobile apps, AI/ML, and DevOps."
        />
      </Helmet>
      <Box
        sx={{
          minHeight: { xs: '60vh', md: '80vh' },
          backgroundColor: '#1565c0',
          backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBjb21wYW55fGVufDB8fDB8fHww)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
          },
        }}
      >
        <Container sx={{ zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Our Services
            </Typography>
            <Typography variant="h5" sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>
              Empowering your backflow business with cutting-edge software and technology.
            </Typography>
          </motion.div>
        </Container>
      </Box>
      <Container sx={{ py: 6, flexGrow: 1 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Trubackflow Software Features
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6, justifyContent: 'center' }}>
          {softwareFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    bgcolor: 'secondary.main',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                    width: '100%',
                    maxWidth: '300px', // Increased size
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2">{feature.description}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4" align="center" gutterBottom>
          Our Technology Expertise
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2, justifyContent: 'center' }}>
          {techServices.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                mr:10,
                p:5,
                display: 'flex',
                justifyContent: 'center',
                ...(service.title === 'DevOps' && { order: { md: -1 } }),
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    bgcolor: 'secondary.main',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                    width: '100%',
                    maxWidth: '300px', // Increased size
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={`${service.title} Icon`}
                    sx={{ height: '80px', mb: 2 }} // Increased image size
                  />
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {service.description}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                    {service.detail}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Services;