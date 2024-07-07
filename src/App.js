import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
import NavigationBar from './components/NavigationBar';
import LoadingScreen from './components/LoadingScreen';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import GalleryPage from './components/pages/GalleryPage';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollToTop from '../src/helpers/ScrollToTop.js';
import LandingPage from './components/Landingpage.js';
import Footer from './components/Footer.js';
import AboutUsPage from "./components/pages/AboutUsPage.js"
import EventSection from './components/pages/EventSection.js';
import ContactUs from './components/pages/ContactUs.js';
function App() {
  const [loading, setLoading] = useState(true);





  return (
    <Router>
      <ScrollToTop />
      <div className="scroll-container">
      {/* <TopBar/ > */}
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/events" element={<EventSection />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
      <ScrollProgressBar />
    </Router>
  );
}

const MainPage = () => (
  <>
    <Element name="home" id="home"><LandingPage /></Element>
    
    <Element name="about" id="about"><AboutUs /></Element>
    {/* <Element name="move" id="move"><MovingToFredericton /></Element> */}
    <Element name="mission" id="mission"><MissionVision /></Element>
    <Footer />
    {/* <Element name="news" id="news"><UpcomingEvents /></Element> */}
    {/* <Element name="sponsor" id="sponsor"><Sponsor /></Element> */}
    {/* <Element name="gallery" id="gallery"><Gallery /></Element> */}
    {/* <Element name="contact" id="contact"><ContactUs /></Element> */}
  </>
);

export default App;
