import { Container, Typography, Box, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

function About() {
  return (
    <>
      <Helmet>
        <title>About Truwave Experts</title>
        <meta
          name="description"
          content="Learn about Truwave, the leading provider of backflow software solutions, powered by web development, mobile apps, AI/ML, and DevOps."
        />
      </Helmet>
      <Box
        sx={{
          minHeight: { xs: '60vh', md: '80vh' },
          backgroundColor: '#1565c0',
          backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/200/547/701/technology-blue-digital-art-wallpaper-preview.jpg)',
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
            <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}>
              About Truwave
            </Typography>
            <Typography variant="h5" sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, maxWidth: '800px', mx: 'auto' }}>
              Innovating backflow management with cutting-edge technology. Trubackflow provides an all-in-one software solution for test management, billing, and payments, designed to simplify your operations, improve customer engagement, and drive efficiency with tools built for the modern backflow industry.
            </Typography>
          </motion.div>
        </Container>
      </Box>
      <Container sx={{ py: 3, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: '100%' }}>
              Truwave is the ultimate all-in-one backflow software solution. Our team of experts has developed a powerful software that provides efficient test management, billing, and payment processing for your backflow business. Truwave software is designed to streamline your workflow and provide a better experience for both you and your customers. We are committed to providing the best backflow software on the market.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              alt="Trubackflow Team Working"
              sx={{ width: '100%', borderRadius: '8px', height: 'auto' }}
            />
          </Grid>
        </Grid>
        <Typography variant="h4" align="center" gutterBottom sx={{ mt: 3 }}>
          Our Technology
        </Typography>
        <Grid container spacing={1} sx={{ mt: 1, justifyContent: 'center' }}>
          {[
            {
              title: 'Web Development',
              desc: 'Building intuitive, scalable web platforms.',
              detail: 'We create responsive, scalable web applications using modern frameworks to ensure seamless user experiences across devices.',
              image: 'https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg',
            },
            {
              title: 'Mobile Apps',
              desc: 'Delivering seamless mobile experiences.',
              detail: 'Our cross-platform mobile apps enable real-time access to backflow data, helping technicians and clients stay connected anytime, anywhere.',
              image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740',
            },
            {
              title: 'AI/ML',
              desc: 'Leveraging data for smarter solutions.',
              detail: 'We leverage AI and machine learning to predict maintenance needs, optimize workflows, and provide actionable insights for your backflow systems.',
              image: 'https://media.licdn.com/dms/image/v2/D5612AQFe6CQy7ohrUA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1662384940934?e=2147483647&v=beta&t=AN2DRkqCdgkfEPwDEHG-7faKqFSDSSlzN79D0QOT4D4',
            },
            {
              title: 'DevOps',
              desc: 'Ensuring reliability with modern practices.',
              detail: 'Our DevOps practices ensure continuous integration, deployment, and monitoring, keeping your software reliable and up-to-date with minimal downtime.',
              image: 'https://wallpaperaccess.com/full/2648921.jpg',
            },
          ].map((item, index) => (
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
                ...(item.title === 'DevOps' && { order: { md: -1 } }),
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
                    p: 2,
                    bgcolor: 'secondary.main',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                    width: '100%',
                    maxWidth: '320px',
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={`${item.title} Icon`}
                    sx={{ height: '100px', mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {item.desc}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                    {item.detail}
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

export default About;