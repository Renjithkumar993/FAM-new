import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
import NavigationBar from './components/NavigationBar';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import GalleryPage from './components/pages/GalleryPage';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollToTop from './helpers/ScrollToTop';
import Footer from './components/Footer';
import AboutUsPage from './components/pages/AboutUsPage';
import EventSection from './components/pages/EventSection';
import ContactUs from './components/pages/ContactUs';
import EventDetail from './components/EventDetail';
import MovingToFredericton from './components/MovingToFredericton';
import LandingPage from "./components/Landingpage"

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/events" element={<EventSection />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="/newtofredericton" element={<MovingToFredericton />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

const MainPage = () => (
  <>
  
    <Element name="home" id="home"><LandingPage /></Element>
  
    <Element name="about" id="about"><AboutUs /></Element>
    <Element name="mission" id="mission"><MissionVision /></Element>
    <Footer />
  </>
);

export default App;
