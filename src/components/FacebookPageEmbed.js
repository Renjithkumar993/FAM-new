import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1000px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4267b2;
  padding: 20px;
  color: #fff;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Description = styled.p`
  text-align: center;
  margin: 0;
  font-size: 1.2rem;
`;

const IframeContainer = styled.div`
  width: 100%;
  padding: 20px;

  .fb-page {
    width: 100%;
  }
`;

const FacebookPageEmbed = () => {
  useEffect(() => {
    // Load the Facebook SDK script
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <Container>
      <Card>
        <LeftContainer>
          <IconContainer>
            <FaFacebookF size={50} />
          </IconContainer>
          <Description>Follow us on Facebook for more updates!</Description>
        </LeftContainer>
        <IframeContainer>
          <div 
            className="fb-page" 
            data-href="https://www.facebook.com/profile.php?id=61552104893247" 
            data-tabs="timeline" 
            data-width="" 
            data-height="" 
            data-small-header="false" 
            data-adapt-container-width="true" 
            data-hide-cover="false" 
            data-show-facepile="true">
            <blockquote 
              cite="https://www.facebook.com/profile.php?id=61552104893247" 
              className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/profile.php?id=61552104893247">Fredericton Association of Malayalees - FAM</a>
            </blockquote>
          </div>
        </IframeContainer>
      </Card>
    </Container>
  );
};

export default FacebookPageEmbed;
