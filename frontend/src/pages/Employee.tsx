import { Container, Typography, Box, Grid } from '@mui/material';
     import { Helmet } from 'react-helmet-async';
     import { motion } from 'framer-motion';

     function Employee() {
         return (
             <>
                 <Helmet>
                     <title>Our Team - Truwave Software</title>
                     <meta
                         name="description"
                         content="Meet the Truwave Software team, including our CEO, software developers, and other key members driving innovation in backflow management solutions."
                     />
                 </Helmet>
                 <Container sx={{ py: 5 }}>
                     <Typography variant="h3" align="center" gutterBottom>
                         Meet Our Team
                     </Typography>
                     <Typography variant="body1" align="center" sx={{ mb: 4, maxWidth: '900px', mx: 'auto' }}>
                         Our dedicated team at Truwave Software is passionate about delivering cutting-edge solutions for backflow management. From leadership to development, every member plays a crucial role in our success.
                     </Typography>
                     <Grid container spacing={1} sx={{ mt: 1, justifyContent: 'center' }}>
                         {[
                             {
                                 name: 'John Doe',
                                 role: 'CEO & Founder',
                                 desc: 'Leads the vision and strategy of Truwave Software.',
                                 detail: 'With over 15 years of experience in the tech industry, John founded Truwave to revolutionize backflow management solutions.',
                                 image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                             },
                             {
                                 name: 'Jane Smith',
                                 role: 'Software Developer',
                                 desc: 'Builds innovative features for our platform.',
                                 detail: 'Jane specializes in full-stack development, ensuring seamless user experiences with her expertise in React and Node.js.',
                                 image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                             },
                             {
                                 name: 'Michael Brown',
                                 role: 'AI/ML Engineer',
                                 desc: 'Drives predictive analytics for backflow systems.',
                                 detail: 'Michael leverages AI to provide actionable insights, helping clients optimize their backflow maintenance workflows.',
                                 image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                             },
                             {
                                 name: 'Emily Davis',
                                 role: 'DevOps Engineer',
                                 desc: 'Ensures seamless deployment and updates.',
                                 detail: 'Emily manages our cloud infrastructure, ensuring reliability and scalability with her expertise in CI/CD pipelines.',
                                 image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                             },
                             {
                                 name: 'David Wilson',
                                 role: 'Product Manager',
                                 desc: 'Shapes the product roadmap and user experience.',
                                 detail: 'David collaborates with the team to deliver features that meet the needs of backflow professionals.',
                                 image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                             },
                         ].map((employee, index) => (
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
                                             src={employee.image}
                                             alt={`${employee.name} Photo`}
                                             sx={{ height: '200px', mb: 2, borderRadius: '50%' }} // Increased image size to 200px (from 150px)
                                         />
                                         <Typography variant="h6" gutterBottom>
                                             {employee.name}
                                         </Typography>
                                         <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                                             {employee.role}
                                         </Typography>
                                         <Typography variant="body2" sx={{ mb: 1 }}>
                                             {employee.desc}
                                         </Typography>
                                         <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                                             {employee.detail}
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

     export default Employee;