import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
import NavigationBar from './components/NavigationBar';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import GalleryPage from './components/pages/GalleryPage';
import ScrollToTop from './helpers/ScrollToTop';
import Footer from './components/Footer';
import AboutUsPage from './components/pages/AboutUsPage';
import EventSection from './components/pages/EventSection';
import ContactUs from './components/pages/ContactUs';
import EventDetail from './components/EventDetail';
import MovingToFredericton from './components/MovingToFredericton';
import LandingPage from "./components/Landingpage"
import UpcomingEvent from './components/UpcomingEvent';
import HeaderCarousel from './components/HeaderCarousel';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<PageWrapper pageTitle="Gallery" Component={GalleryPage} />} />
        <Route path="/aboutus" element={<PageWrapper pageTitle="About Us" Component={AboutUsPage} />} />
        <Route path="/events" element={<PageWrapper pageTitle="Events" Component={EventSection} />} />
        <Route path="/events/:eventId" element={<PageWrapper pageTitle="Event Details" Component={EventDetail} />} />
        <Route path="/newtofredericton" element={<PageWrapper pageTitle="Moving to Fredericton" Component={MovingToFredericton} />} />
        <Route path="/contactus" element={<PageWrapper pageTitle="Contact Us" Component={ContactUs} />} />
      </Routes>
    </Router>
  );
};

const MainPage = () => (
  <>
    <Element name="home" id="home"><LandingPage /></Element>
    <Element name="about" id="about"><AboutUs /></Element>
    <Element name="mission" id="mission"><MissionVision /></Element>
    
    <UpcomingEvent />
    <Footer />
  </>
);

const PageWrapper = ({ pageTitle, Component }) => (
  <>
    <HeaderCarousel pageTitle={pageTitle} />
    <Component />
  
  </>
);

export default App;
