import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Typography.css';
import NavigationBar from './components/NavigationBar';
import ScrollToTop from './helpers/ScrollToTop';
import Footer from './components/Footer';
import PageWithHelmet from './components/PageWithHelmet';
import Loading from './components/Loading';
import { Element } from 'react-scroll';


const AboutUsPage = lazy(() => import('./components/pages/AboutUsPage'));
const EventSection = lazy(() => import('./components/pages/EventSection'));
const ContactUs = lazy(() => import('./components/pages/ContactUs'));
const EventDetail = lazy(() => import('./components/pages/EventDetail'));
const MovingToFredericton = lazy(() => import('./components/MovingToFredericton'));
const LandingPage = lazy(() => import('./components/Landingpage'));
const UpcomingEvent = lazy(() => import('./components/UpcomingEvent'));
const JoinPage = lazy(() => import('./components/pages/JoinPage'));
const JoinComponent = lazy(() => import('./components/JoinComponent'));
const Gallery = lazy(() => import('./components/pages/Gallery'));
const MissionVision = lazy(() => import('./components/MissionVision'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const FacebookPageEmbed = lazy(() => import('./components/FacebookPageEmbed'))

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
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      );
    }

    return this.props.children; 
  }
}

const MainPage = React.memo(() => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadComponents = async () => {
      const components = [
        import('./components/Landingpage'),
        import('./components/AboutUs'),
        import('./components/MissionVision'),
        import('./components/FacebookPageEmbed'),
        import('./components/MovingToFredericton'),
        import('./components/JoinComponent'),
        import('./components/UpcomingEvent')
      ];

      try {
        await Promise.all(components);
      } catch (error) {
        console.error('Error preloading components', error);
      } finally {
        setLoading(false);
      }
    };

    preloadComponents();
  }, []);

  if (loading) {
    return <Loading loading={true} />;
  }

  return (
    <>
      <Suspense fallback={<Loading loading={true} />}>
        <Element name="home" id="home"><LandingPage /></Element>
        <Element name="about" id='about'><AboutUs /></Element>
        <Element name="mission" id="mission"><MissionVision /></Element>
        <FacebookPageEmbed />
        <MovingToFredericton />
        <JoinComponent />
        <UpcomingEvent />
      </Suspense>
    </>
  );
});

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <NavigationBar />
      <ErrorBoundary>
        <Suspense fallback={<Loading loading={true} />}>
          <Routes>
            <Route path="/" element={<PageWithHelmet pageTitle="Welcome to FAM - Fredericton Association of Malayalees" Component={MainPage} />} />
            <Route path="/aboutus" element={<PageWithHelmet pageTitle="About Us" Component={AboutUsPage} />} />
            <Route path="/events" element={<PageWithHelmet pageTitle="Events" Component={EventSection} />} />
            <Route path="/:eventId" element={<PageWithHelmet pageTitle="Event Detail" Component={EventDetail} />} />
            <Route path="/contactus" element={<PageWithHelmet pageTitle="Contact Us" Component={ContactUs} />} />
            <Route path="/joinus" element={<PageWithHelmet pageTitle="Join Us" Component={JoinPage} />} />
            <Route path="/gallery" element={<PageWithHelmet pageTitle="Gallery" Component={Gallery} />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default App;
