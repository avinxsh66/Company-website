import { Container, Typography, Button, Box, Grid } from '@mui/material';
     import { Helmet } from 'react-helmet-async';
     import { motion } from 'framer-motion';

     function Home() {
         const scrollToSection = (sectionId: string) => {
             const section = document.getElementById(sectionId);
             if (section) {
                 section.scrollIntoView({ behavior: 'smooth' });
             }
         };

         return (
             <>
                 <Helmet>
                     <title>Truwave Software</title>
                     <meta
                         name="description"
                         content="Trubackflow offers powerful backflow software for test management, billing, and payments, built with cutting-edge web, mobile, AI/ML, and DevOps tech."
                     />
                 </Helmet>
                 <Box
                     sx={{
                         minHeight: { xs: '60vh', md: '80vh' },
                         backgroundImage: 'url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D)',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         color: 'white',
                         textAlign: 'center',
                         position: 'relative',
                         '&:after': {
                             content: '""',
                             position: 'absolute',
                             top: 0,
                             left: 0,
                             right: 0,
                             bottom: 0,
                             background: 'rgba(0, 0, 0, 0.5)',
                         },
                     }}
                 >
                     <Container sx={{ zIndex: 1 }}>
                         <motion.div
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.8 }}
                         >
                             <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}>
                                 Streamline Your Backflow Business
                             </Typography>
                             <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, maxWidth: '800px', mx: 'auto' }}>
                                 All-in-one software for test management, billing, and payments. Truwave empowers your business with intuitive tools to simplify workflows, enhance customer satisfaction, and boost operational efficiency using advanced technology tailored for backflow professionals.
                             </Typography>
                             <Button
                                 variant="contained"
                                 color="primary"
                                 size="large"
                                 onClick={() => scrollToSection('contact')}
                             >
                                 Request a Demo
                             </Button>
                         </motion.div>
                     </Container>
                 </Box>
                 <Container sx={{ py: 3 }}>
                     <Typography variant="h4" align="center" gutterBottom>
                         Welcome to Truwave software
                     </Typography>
                     <Typography variant="body1" align="center" sx={{ mb: 2, maxWidth: '900px', mx: 'auto' }}>
                         Truwave is the ultimate all-in-one backflow software solution. Our team of experts has developed a powerful software that provides efficient test management, billing, and payment processing for your backflow business. Trubackflow software is designed to streamline your workflow and provide a better experience for both you and your customers. We are committed to providing the best backflow software on the market.
                     </Typography>
                     <Typography variant="h4" align="center" gutterBottom sx={{ mt: 3 }}>
                         Our Expertise
                     </Typography>
                     <Grid container spacing={1} sx={{ mt: 1, justifyContent: 'center' }}>
                         {[
                             {
                                 title: 'Web Development',
                                 desc: 'Custom dashboards and portals for backflow management.',
                                 detail: 'We create responsive, scalable web applications using modern frameworks to ensure seamless user experiences across devices.',
                                 image: 'https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg',
                             },
                             {
                                 title: 'Mobile Apps',
                                 desc: 'Apps for technicians and clients on the go.',
                                 detail: 'Our cross-platform mobile apps enable real-time access to backflow data, helping technicians and clients stay connected anytime, anywhere.',
                                 image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740',
                             },
                             {
                                 title: 'AI/ML',
                                 desc: 'Predictive analytics for backflow system maintenance.',
                                 detail: 'We leverage AI and machine learning to predict maintenance needs, optimize workflows, and provide actionable insights for your backflow systems.',
                                 image: 'https://media.licdn.com/dms/image/v2/D5612AQFe6CQy7ohrUA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1662384940934?e=2147483647&v=beta&t=AN2DRkqCdgkfEPwDEHG-7faKqFSDSSlzN79D0QOT4D4',
                             },
                             {
                                 title: 'DevOps',
                                 desc: 'Seamless cloud hosting and updates.',
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
                                     mr: 10,
                                     p: 5,
                                     display: 'flex',
                                     justifyContent: 'center',
                                     ...(item.title === 'DevOps' && { order: { md: -1 } }),
                                 }}
                             >
                                 <motion.div
                                     initial={{ opacity: 0,x:10, y: 20 }}
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

     export default Home;