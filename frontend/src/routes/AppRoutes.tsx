import Navbar from '../components/layout/Navbar.tsx';
     import Footer from '../components/layout/Footer.tsx';
     import Home from '../pages/Home.tsx';
     import About from '../pages/About.tsx';
     import Services from '../pages/Services.tsx';
     import Employee from '../pages/Employee.tsx'
     import Contact from '../pages/Contact.tsx';
     import Privacy from '../pages/Privacy.tsx';
     import Terms from '../pages/Terms.tsx';
     import { Box } from '@mui/material';

     function AppRoutes() {
         return (
             <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                 <Navbar />
                 <Box sx={{ flex: 1 }}>
                     <Box id="home">
                         <Home />
                     </Box>
                     <Box id="about">
                         <About />
                     </Box>
                     <Box id="services">
                         <Services />
                     </Box>
                     <Box id="employee">
                         <Employee />
                     </Box>
                     <Box id="contact">
                         <Contact />
                     </Box>
                     <Box id="privacy">
                         <Privacy />
                     </Box>
                     <Box id="terms">
                         <Terms />
                     </Box>
                 </Box>
                 <Footer />
             </Box>
         );
     }

     export default AppRoutes;