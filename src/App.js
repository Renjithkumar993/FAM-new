import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './Typography.css';
import NavigationBar from './components/NavigationBar';
import ScrollToTop from './helpers/ScrollToTop';
import Footer from './components/Footer';
import PageWithHelmet from './components/PageWithHelmet';
import Loading from './components/Loading';
import FacebookPageEmbed from './components/FacebookPageEmbed';
import { Element } from 'react-scroll';

// Lazy load components
const AboutUsPage = lazy(() => import('./components/pages/AboutUsPage'));
const EventSection = lazy(() => import('./components/pages/EventSection'));
const ContactUs = lazy(() => import('./components/pages/ContactUs'));
const EventDetail = lazy(() => import('./components/EventDetail'));
const MovingToFredericton = lazy(() => import('./components/MovingToFredericton'));
const LandingPage = lazy(() => import('./components/Landingpage'));
const UpcomingEvent = lazy(() => import('./components/UpcomingEvent'));
const JoinPage = lazy(() => import('./components/pages/JoinPage'));
const JoinComponent = lazy(() => import('./components/JoinComponent'));
const Gallery = lazy(() => import('./components/pages/Gallery'));
const MissionVision = lazy(() => import('./components/MissionVision'));

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <ErrorBoundary>
        <Suspense fallback={<Loading loading={true} />}>
          <Routes>
            <Route path="/" element={<PageWithHelmet pageTitle="Welcome to FAM - Fredericton Association of Malayalees" Component={MainPage} />} />
            <Route path="/aboutus" element={<PageWithHelmet pageTitle="About Us" Component={AboutUsPage} />} />
            <Route path="/events" element={<PageWithHelmet pageTitle="Events" Component={EventSection} />} />
            <Route path="/events/:eventId" element={<PageWithHelmet pageTitle="Event Detail" Component={EventDetail} />} />
            <Route path="/contactus" element={<PageWithHelmet pageTitle="Contact Us" Component={ContactUs} />} />
            <Route path="/joinus" element={<PageWithHelmet pageTitle="Join Us" Component={JoinPage} />} />
            <Route path="/gallery" element={<PageWithHelmet pageTitle="Gallery" Component={Gallery} />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

const MainPage = React.memo(() => (
  <>
    <Element name="home" id="home"><LandingPage /></Element>
    <Element name="mission" id="mission"><MissionVision /></Element>
    <FacebookPageEmbed />
    <MovingToFredericton />
    <JoinComponent />
    <UpcomingEvent />
    <Footer />
  </>
));

export default App;
