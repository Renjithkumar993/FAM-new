import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUsPage.css';
import FullWidthImage from '../FullWidthImage';
import { useInView } from 'react-intersection-observer';
import Breadcrumbs from '../Breadcrumbs';
import HelmetWrapper from '../HelmetWrapper';
import JoinComponent from '../JoinComponent';
import Loading from '../Loading'; // Ensure this is the correct path to your Loading component

const AboutUsPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [missionVisionData, setMissionVisionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });



  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const [aboutResponse, missionVisionResponse] = await Promise.all([
          fetch(`${process.env.PUBLIC_URL}/config/aboutus.json`),
          fetch(`${process.env.PUBLIC_URL}/config/missionvission.json`)
        ]);

        if (!aboutResponse.ok || !missionVisionResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const aboutData = await aboutResponse.json();
        const missionVisionData = await missionVisionResponse.json();

        setAboutData(aboutData);
        setMissionVisionData(missionVisionData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const aboutImage1 = `${process.env.PUBLIC_URL}/images/fredericton/Fredericton-image-1.jpg`;
  const aboutImage2 = `${process.env.PUBLIC_URL}/images/fredericton/Fredericton-image-2.jpg`;

  return (
    <>
      <HelmetWrapper 
        pageTitle="About Us - Fredericton Association of Malayalees" 
        description="Learn more about the Fredericton Association of Malayalees." 
      />
      <div className="about-us-page">
        <Container className="about-us-content">
          <Breadcrumbs />
          <Row className={`mb-1 ${inView1 ? 'animate' : ''}`} ref={ref1}>
            <Col>
              <h1 className="about-heading">About Fredericton Association of Malayalees</h1>
            </Col>
          </Row>
          <Row className='align-items-center'>
            <Col md={6} className={`${inView2 ? 'animate' : 'align-items-center'}`} ref={ref2}>
              <div className="about-description">
                {aboutData.about.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Col>
            <Col md={6} className={`${inView2 ? 'animate' : ''}`} ref={ref2}>
              <div className="image-container">
                <img src={aboutImage1} alt="About Us" className="about-image" />
              </div>
            </Col>
          </Row>
          <Row className="statistics mt-4 ">
            {aboutData.about.statistics.map((stat, index) => (
              <Col md={6} key={index} className={`stat-item ${inView3 ? 'animate' : ''}`} ref={ref3}>
                <ul>
                  {stat.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
          <Row className="mt-5 align-items-center">
            <Col md={6} className={`${inView4 ? 'animate' : ''}`} ref={ref4}>
              <div className="image-container">
                <img src={aboutImage2} alt="Activities" className="about-image" />
              </div>
            </Col>
            <Col md={6} className={`${inView4 ? 'animate' : ''}`} ref={ref4}>
              <div className="mission-description">
                <h2>Fredericton Association of Malayalees</h2>
                <p>
                  Through FAM (Fredericton Association of Malayalees), we unite and join hands to pass the culture on to generations. As a team, we conduct cultural activities, linguistic programs, festivals, charity activities, etc. FAM is a forum where we can meet, exchange views, and foster friendships.
                </p>
                <p>
                  Malayalees in Fredericton are represented in FAM, which advocates for their wellbeing and cultural needs. With all our cooperative efforts, FAM pledges to keep our next generation abreast of our mother tongue, culture, and enriched heritage.
                </p>
                <p>
                  We are open to collaborating and engaging with other cultural groups and ethnicities. Let us hold our hands to form a composite culture with every color and song to be felt and experienced in its original essence under a single umbrella.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6} className={`${inView4 ? 'animate' : ''}`} ref={ref4}>
              <div className="mission-vision">
                <h2>Our Mission</h2>
                <p>{missionVisionData.missionVision.mission}</p>
              </div>
            </Col>
            <Col md={6} className={`${inView4 ? 'animate' : ''}`} ref={ref4}>
              <div className="mission-vision">
                <h2>Our Vision</h2>
                <p>{missionVisionData.missionVision.vision}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <JoinComponent />
      <FullWidthImage />
    </>
  );
};

export default AboutUsPage;
