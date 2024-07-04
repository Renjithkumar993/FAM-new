import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import './App.css';
import EventPopup from './components/EventPopup';
import NavigationBar from './components/NavigationBar';
import LoadingScreen from './components/LoadingScreen';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import MovingToFredericton from './components/MovingToFredericton';
import ContactUs from './components/ContactUs';
import UpcomingEvents from './components/UpcomingEvents';
import Gallery from './components/Gallery';
import GalleryPage from './components/pages/GalleryPage';
import EventDetail from './components/pages/EventDetail';
import ScrollProgressBar from './components/ScrollProgressBar';
import LandingPage from './components/Landingpage.js';
import Sponsor from './components/Sponsor.js';
import ScrollToTop from './helpers/ScrollToTop.js';

const handleScroll = () => {
  const navbar = document.querySelector('.navbar-custom');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

const Home = () => (
  <>
    <Element name="home" id="home"><LandingPage /></Element>
    <Element name="about" id="about"><AboutUs /></Element>
    <Element name="move" id="move"><MovingToFredericton /></Element>
    <Element name="mission" id="mission"><MissionVision /></Element>
    <Element name="news" id="news"><UpcomingEvents /></Element>
    {/* <Element name="sponsor" id="sponsor"><Sponsor /></Element> */}
    <Element name="gallery" id="gallery"><Gallery /></Element>
    <Element name="contact" id="contact"><ContactUs /></Element>
  </>
);

const AppWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      scroller.scrollTo('home', {
        duration: 0,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70,
      });
    }
  }, [location.pathname]);

  return <App />;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
   
      <div className="scroll-container">
      <ScrollToTop />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/event/:eventName" element={<EventDetail />} />
        </Routes>
      </div>
      <ScrollProgressBar />
    </Router>
  );
}

export default App;
