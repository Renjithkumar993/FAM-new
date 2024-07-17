// src/components/Loading.js
import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = ({ loading }) => {
  return (
    <div className="loading-container">
      <HashLoader color="#ff6341" loading={loading} size={100} />
    </div>
  );
};

export default Loading;
