import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
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
import HeaderCarousel from './components/HeaderCarousel';
import Loading from './components/Loading';
import { Helmet } from 'react-helmet';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Uncomment this if you want to simulate a loading delay
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Adjust the delay as needed
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loading loading={loading} />;
  // }

  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
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
    <Helmet>
      <title>Welcome to FAM - Fredericton Association of Malayalees</title>
      <meta name="description" content="FAM is a non-profit organization celebrating Malayalam culture in Fredericton, Canada. Join us for cultural events, festivals, and social gatherings." />
    </Helmet>
    <Element name="home" id="home"><LandingPage /></Element>
    <Element name="about" id="about"><AboutUs /></Element>
    <Element name="mission" id="mission"><MissionVision /></Element>
    <UpcomingEvent />
    <Footer />
  </>
);

const PageWrapper = ({ pageTitle, Component }) => (
  <>
    <Helmet>
      <title>{pageTitle} - Fredericton Association of Malayalees</title>
      <meta name="description" content={`Learn more about ${pageTitle} at the Fredericton Association of Malayalees.`} />
    </Helmet>
    <HeaderCarousel pageTitle={pageTitle} />
    <Component />
  </>
);

export default App;
