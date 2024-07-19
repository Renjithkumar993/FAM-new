import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
 height: 100vh; 
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: calc(100% - 60px); /* Full height minus heading height and padding */
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 100%;
    max-width: 750px;
    height: 100%;
    max-height: 679px;
    border: none;
    overflow: hidden;
  }
`;

const FacebookPostEmbed = ({ headingText }) => {
  const iframeSrc = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0fcnhvWyd27HETe1fvExCKqcwR8iz4P3A8xNigkvXkUgMStpKJsQg3mS3Xoqpuxvl%26id%3D61552104893247&show_text=true&width=500";

  return (
    <Container>
      <Heading>{headingText}</Heading>
      <IframeContainer>
        <iframe
          src={iframeSrc}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook Post Embed"
        ></iframe>
      </IframeContainer>
    </Container>
  );
};

export default FacebookPostEmbed;
