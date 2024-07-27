import React, { useEffect, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import WaveBackground from './WaveBackground';

// Keyframes for animations

const bgImage = `${process.env.PUBLIC_URL}/images/web_bg.png`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
   height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${fadeIn} 0.6s ease-out;
  background: transparent;
  background-repeat: repeat;
  background-image: url(${bgImage}) !important;

`;

const Card = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 700px;
  width: 100%;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Header = styled.div`
  background-color: #4267b2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #4267b2;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
`;

const Description = styled.p`
  margin: 5px 0 0;
  font-size: 1rem;
  text-align: center;
  opacity: 0.8;
`;

const IframeContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
  text-align: center;
  .fb-page {
    margin: 0 auto;
  }
`;

const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.5rem;
  color: #4267b2;
`;

const FallbackLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #4267b2;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #365899;
    transform: translateY(-5px);
  }
`;

const FacebookPageEmbed = () => {
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3; // Max retries for loading the SDK

  const loadFacebookSDK = useCallback(() => {
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.FB) {
          window.FB.XFBML.parse();
          setLoading(false);
        } else if (retryCount < maxRetries) {
          setRetryCount((prevCount) => prevCount + 1);
        }
      };
      script.onerror = () => {
        if (retryCount < maxRetries) {
          setRetryCount((prevCount) => prevCount + 1);
        }
      };
      document.body.appendChild(script);
    } else if (window.FB) {
      window.FB.XFBML.parse();
      setLoading(false);
    } else if (retryCount < maxRetries) {
      setRetryCount((prevCount) => prevCount + 1);
    }
  }, [retryCount, maxRetries]);

  useEffect(() => {
    if (retryCount < maxRetries) {
      loadFacebookSDK();
    } else {
      setLoading(false); // Stop loading after max retries
    }
  }, [loadFacebookSDK, retryCount, maxRetries]);

  useEffect(() => {
    return () => {
      // Cleanup script tag and FB SDK on unmount
      const script = document.getElementById('facebook-jssdk');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <>
   
      <Container>
  
        <Card>
          <Header>
            <IconContainer>
              <FaFacebookF size={30} />
            </IconContainer>
            <Title>Follow Us on Facebook</Title>
            <Description>Stay updated with our latest news</Description>
          </Header>
          <IframeContainer>
            {loading ? (
              <LoadingIndicator>Loading...</LoadingIndicator>
            ) : (
              <div
                className="fb-page"
                data-href="https://www.facebook.com/profile.php?id=61552104893247"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/profile.php?id=61552104893247"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/profile.php?id=61552104893247">
                    Fredericton Association of Malayalees - FAM
                  </a>
                </blockquote>
              </div>
            )}
            {retryCount >= maxRetries && (
              <FallbackLink href="https://www.facebook.com/profile.php?id=61552104893247" target="_blank">
                Visit our Facebook Page
              </FallbackLink>
            )}
          </IframeContainer>
        </Card>
      </Container>
    </>
  );
};

export default FacebookPageEmbed;
