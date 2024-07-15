// src/JoinPage.js

import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, Avatar, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled('div')(({ theme }) => ({
  backgroundImage: 'url(https://source.unsplash.com/random)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(4),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  '& h1, & h2': {
    position: 'relative',
  },
}));

const testimonialData = [
  {
    name: 'John Doe',
    role: 'Member',
    image: 'https://via.placeholder.com/150',
    text: 'Joining FAM has been a wonderful experience. It feels like home away from home.',
  },
  {
    name: 'Jane Smith',
    role: 'Member',
    image: 'https://via.placeholder.com/150',
    text: 'FAM events are always well-organized and fun. I’ve met so many amazing people here.',
  },
];

const JoinPage = () => {
  return (
    <Container>
      <HeroSection>
        <Typography variant="h1" component="h1">
          Join Fredericton Association of Malayalees
        </Typography>
        <Typography variant="h5" component="h2">
          Connect, Celebrate, and Grow with Our Community
        </Typography>
      </HeroSection>

      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          Who We Are
        </Typography>
        <Typography paragraph>
          The Fredericton Association of Malayalees (FAM) is a vibrant community of Malayalee families and individuals in Fredericton. We aim to promote the rich cultural heritage of Kerala through various events and activities.
        </Typography>

        <Typography variant="h2" gutterBottom>
          What We Do
        </Typography>
        <Typography paragraph>
          We organize cultural events, festivals, and community gatherings that showcase the traditions, art, and cuisine of Kerala. We also provide a support network for newcomers and foster a sense of community among members.
        </Typography>

        <Typography variant="h2" gutterBottom>
          What You Get
        </Typography>
        <Typography paragraph>
          As a member of FAM, you will enjoy exclusive access to our events, networking opportunities, and a platform to connect with fellow Malayalees. You'll also receive regular updates and newsletters about upcoming activities and community news.
        </Typography>

        <Button variant="contained" color="primary" size="large" fullWidth>
          Register Now
        </Button>
      </Box>

      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonialData.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar src={testimonial.image} alt={testimonial.name} />
                    <Box ml={2}>
                      <Typography variant="h6">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1">
                    {testimonial.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box my={4}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography paragraph>
            Have questions? Feel free to reach out to us at <a href="mailto:contact@fam.com">contact@fam.com</a>.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default JoinPage;
