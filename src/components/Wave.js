// Wave.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveWave = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const WaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 150px;
  overflow: hidden;
  line-height: 0;
`;

const WaveSVG = styled.svg`
  position: relative;
  display: block;
  width: 200%;
  height: 100%;
  animation: ${moveWave} 20s linear infinite;
`;

const Wave = () => {
  return (
    <WaveContainer>
      <WaveSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#1f1f1f" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>
        </defs>
        <path d="M0,0 C120,50 240,100 360,100 C480,100 600,50 720,50 C840,50 960,100 1080,100 C1200,100 1320,50 1440,0 L1440,120 L0,120 Z" fill="url(#gradient)" />
      </WaveSVG>
    </WaveContainer>
  );
}

export default Wave;
