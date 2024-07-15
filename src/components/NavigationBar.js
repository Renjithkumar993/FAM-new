import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Box, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCalendarAlt, faMapMarkerAlt, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import "./NavigationBar.css"

const pages = [
  { name: 'Home', icon: faHome, path: '/' },
  { name: 'About Us', icon: faInfoCircle, path: '/aboutus' },
  { name: 'Events', icon: faCalendarAlt, path: '/events' },
  { name: 'New to Fredericton?', icon: faMapMarkerAlt, path: '/newtofredericton' },
  { name: 'Contact Us', icon: faEnvelope, path: '/contactus' },
];

const logo = `${process.env.PUBLIC_URL}/images/logofam.jpg`;

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar-custom'>

   
    <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black' ,fontWeight:"700",
fontSize: '2rem'}} >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <img src={logo} alt="FAM Logo" style={{ height: '50px', width: '50px', borderRadius: '50%', marginRight: '10px' }} />
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
                  mx: 1,
                  '&:hover': {
                    backgroundColor: '#ff5722',
                    color: 'white',
                  },
                }}
                startIcon={<FontAwesomeIcon icon={page.icon} />}
              >
                {page.name}
              </Button>
            ))}
            <Button
              component={RouterLink}
              to="/join"
              variant="contained"
              sx={{
                ml: 2,
                backgroundColor: '#ff5722',
                color: 'white',
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
            sx={{ ml: 2, display: { md: 'none' } }}
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
          <ListItem button component={RouterLink} to="/join" onClick={toggleMenu} sx={{ '&:hover': { backgroundColor: '#ff5722', color: 'white' } }}>
            <ListItemIcon sx={{ color: 'inherit' }}>
              <FontAwesomeIcon icon={faEnvelope} />
            </ListItemIcon>
            <ListItemText primary="Join Community" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
    </div>
  );
};

export default NavigationBar;
