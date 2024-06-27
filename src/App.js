import logo from './logo.svg';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import EventPopup from './components/EventPopup';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/Landingpage';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import MovingToFredericton from './components/MovingToFredericton';
import ContactUs from './components/ContactUs';
import UpcomingEvents from './components/UpcomingEvents';
import Gallery from './components/Gallery';
import MeetTheTeam from './components/MeetTheTeam';
import ScrollProgressBar from './components/ScrollProgressBar'; 


const handleScroll = () => {
  const navbar = document.querySelector('.navbar-custom');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};




function App() {


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
     <div className="scroll-container">
   <NavigationBar />
   <LandingPage />
   <AboutUs />
   <MissionVision />
   <MovingToFredericton />
   <UpcomingEvents />
   <Gallery />
   <MeetTheTeam />
   <ContactUs />
   </div>
   <ScrollProgressBar />
   <EventPopup />
   
    </>


  );
}

export default App;
