import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import truwaveLogo from '../../assets/placeholders/truwavelogo.jpeg'; 

const navLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Contact', sectionId: 'contact' },
];

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false); // Close the drawer on mobile after clicking
        }
    };

    const drawer = (
        <Box sx={{ textAlign: 'center', pt: 2 }}>
            {navLinks.map((link) => (
                <Button
                    key={link.label}
                    color="inherit"
                    onClick={() => scrollToSection(link.sectionId)}
                    sx={{ display: 'block', my: 1 }}
                >
                    {link.label}
                </Button>
            ))}
        </Box>
    );

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#09306b' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <img
                        src={truwaveLogo}
                        alt="Truwave Logo"
                        style={{ height: '40px', cursor: 'pointer' }}
                        onClick={() => scrollToSection('home')}
                    />
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navLinks.map((link) => (
                        <Button
                            key={link.label}
                            color="inherit"
                            onClick={() => scrollToSection(link.sectionId)}
                        >
                            {link.label}
                        </Button>
                    ))}
                </Box>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', sm: 'none' } }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}

export default Navbar;
