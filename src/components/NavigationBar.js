import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Box, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCalendarAlt, faEnvelope, faBars, faImages } from '@fortawesome/free-solid-svg-icons';
import './NavigationBar.css';

const pages = [
  { name: 'Home', icon: faHome, path: '/' },
  { name: 'About Us', icon: faInfoCircle, path: '/aboutus' },
  { name: 'Events', icon: faCalendarAlt, path: '/events' },
  { name: 'Gallery', icon: faImages, path: '/Gallery' },
  { name: 'Contact Us', icon: faEnvelope, path: '/contactus' },

];

const logo = `${process.env.PUBLIC_URL}/images/logofam.jpg`;

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setScrolled(true);
    }
  }, [location.pathname]);

  return (
    <AppBar position="fixed" className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <img src={logo} alt="FAM Logo" className={`logo ${scrolled ? 'logo-scrolled' : ''}`} />
              <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' } }}>
                {/* Add your title or logo text here */}
              </Typography>
            </RouterLink>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.path}
                color="inherit"
                sx={{
                  mx: 1.5,
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  color: scrolled ? '#ff5722' : '#ff5722',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#ff5722',
                    '&::after': {
                      width: '100%',
                    },
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: '-5px',
                    left: '0',
                    backgroundColor: '#ff5722',
                    transition: 'width 0.3s ease',
                  },
                }}
                startIcon={<FontAwesomeIcon icon={page.icon} />}
              >
                {page.name}
              </Button>
            ))}
            <Button
              component={RouterLink}
              to="/joinus"
              variant="contained"
              sx={{
                ml: 2,
                backgroundColor: '#ff5722',
                borderRadius: "25px",
                color: 'white',
                fontSize: '0.9rem',
                '&:hover': {
                  backgroundColor: '#e64a19',
                },
              }}
            >
              Join Community
            </Button>
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ ml: 2, display: { md: 'none' }, fontSize: '2rem', color: '#ff5722' }}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="left" open={menuOpen} onClose={toggleMenu} sx={{ '& .MuiDrawer-paper': { backgroundColor: 'white', color: 'black' } }}>
        <List>
          {pages.map((page) => (
            <ListItem button key={page.name} component={RouterLink} to={page.path} onClick={toggleMenu} sx={{ '&:hover': { backgroundColor: '#ff5722', color: 'white' } }}>
              <ListItemIcon sx={{ color: 'inherit' }}>
                <FontAwesomeIcon icon={page.icon} />
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItem>
          ))}
          <ListItem button component={RouterLink} to="/joinus" onClick={toggleMenu} sx={{ '&:hover': { backgroundColor: '#ff5722', color: 'white' } }}>
            <ListItemIcon sx={{ color: 'inherit' }}>
              <FontAwesomeIcon icon={faEnvelope} />
            </ListItemIcon>
            <ListItemText primary="Join Community" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavigationBar;
