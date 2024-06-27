import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import BackgroundSlider from 'react-background-slider';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./LandingPage.css";

// Dynamically import images from the folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../images/heroimages', false, /\.(png|jpe?g|svg)$/));

const LandingPage = () => {
  return (
    <div className="landing-page" id='home'>
      <BackgroundSlider
        images={images}
        duration={5}
        transition={2}
      />
      <div className="overlay"></div>
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <div className="carousel-caption-wrapper">
            <Carousel.Caption>
              <TransitionGroup>
                <CSSTransition
                  key="caption-1"
                  timeout={500}
                  classNames="fade"
                >
                  <div className="caption-content animate">
                    <div className="text-box">
                      <span className="badge">Hello</span>
                      <h1>Welcome to  <span className='fam-hero'> FAM</span></h1>
                      <h2>Fredericton Association of Malayalees (FAM)</h2>
                      <p>A registered non-profit organization - society act established in 2021</p>
                      <Button variant="danger" className="mr-2" href='#about'>Learn More</Button>
                    </div>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption-wrapper">
            <Carousel.Caption>
              <TransitionGroup>
                <CSSTransition
                  key="caption-2"
                  timeout={500}
                  classNames="fade"
                >
                  <div className="caption-content animate">
                    <div className="text-box">
                      <span className="badge">Hello</span>
                      <h1>We Do Picnics</h1>
                      <h2>Cultural Festival Celebrations</h2>
                      <p>Bringing together the community with vibrant cultural events.</p>
                      <Button variant="danger" className="mr-2" href='#about'>Learn More</Button>
                    </div>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-caption-wrapper">
            <Carousel.Caption>
              <TransitionGroup>
                <CSSTransition
                  key="caption-3"
                  timeout={500}
                  classNames="fade"
                >
                  <div className="caption-content animate">
                    <div className="text-box">
                      <span className="badge">Hello</span>
                      <h1>Bring Your Ideas</h1>
                      <h2>Join Us in Making a Difference</h2>
                      <p>We welcome your suggestions and participation in our activities.</p>
                      <Button variant="danger" className="mr-2" href='#about'>Learn More</Button>
                    </div>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LandingPage;
