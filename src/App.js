import React, { useEffect, useState } from 'react';
import './App.css';
import EventPopup from './components/EventPopup';
import NavigationBar from './components/NavigationBar';
import LoadingScreen from './components/LoadingScreen'; // Import the LoadingScreen component
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import MovingToFredericton from './components/MovingToFredericton';
import ContactUs from './components/ContactUs';
import UpcomingEvents from './components/UpcomingEvents';
import Gallery from './components/Gallery';
import MeetTheTeam from './components/MeetTheTeam';
import ScrollProgressBar from './components/ScrollProgressBar';
import LandingPage from './components/Landingpage.js';

const handleScroll = () => {
  const navbar = document.querySelector('.navbar-custom');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Simulate a delay to show the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="scroll-container">
        <NavigationBar />
        <LandingPage />
        <AboutUs />
        <MovingToFredericton />
        <MissionVision />
       
        <UpcomingEvents />
        <Gallery />
        {/* <MeetTheTeam /> */}
        <ContactUs />
      </div>
      <ScrollProgressBar />
      {/* <EventPopup /> */}
    </>
  );
}

export default App;
