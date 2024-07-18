import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
import './Typography.css';
import NavigationBar from './components/NavigationBar';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import ScrollToTop from './helpers/ScrollToTop';
import Footer from './components/Footer';
import AboutUsPage from './components/pages/AboutUsPage';
import EventSection from './components/pages/EventSection';
import ContactUs from './components/pages/ContactUs';
import EventDetail from './components/EventDetail';
import MovingToFredericton from './components/MovingToFredericton';
import LandingPage from './components/Landingpage';
import UpcomingEvent from './components/UpcomingEvent';
import Loading from './components/Loading';
import HelmetWrapper from './components/HelmetWrapper';
import JoinPage from './components/pages/JoinPage';
import JoinComponent from './components/JoinComponent';
import Gallery from './components/pages/Gallery';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutus" element={<PageLayout pageTitle="About Us" Component={AboutUsPage} />} />
          <Route path="/events" element={<PageLayout pageTitle="Events" Component={EventSection} />} />
          <Route path="/events/FAMOnam2024" element={<PageLayout pageTitle="Onam 2024 FAM" Component={EventDetail} />} />
          <Route path="/contactus" element={<PageLayout pageTitle="Contact Us" Component={ContactUs} />} />
          <Route path="/joinus" element={<PageLayout pageTitle="Join Us" Component={JoinPage} />} />
          <Route path="/gallery" element={<PageLayout pageTitle="Gallery" Component={Gallery} />} />
        </Routes>
    </Router>
  );
};

const MainPage = () => (
  <>
    <HelmetWrapper 
      pageTitle="Welcome to FAM - Fredericton Association of Malayalees" 
      description="FAM is a non-profit organization celebrating Malayalam culture in Fredericton, Canada. Join us for cultural events, festivals, and social gatherings." 
    />
    
    <Element name="home" id="home"><LandingPage /></Element>
    {/* <Element name="about" id="about"><AboutUs /></Element> */}
    <Element name="mission" id="mission"><MissionVision /></Element>
    <MovingToFredericton />

    <JoinComponent />
    <UpcomingEvent />
    <Footer />
  </>
);

const PageLayout = ({ pageTitle, Component }) => (
  <>
    <HelmetWrapper 
      pageTitle={`${pageTitle} - Fredericton Association of Malayalees`} 
      description={`Learn more about ${pageTitle} at the Fredericton Association of Malayalees.`} 
    />
    <Component />
  </>
);

export default App;
