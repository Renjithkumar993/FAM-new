// src/components/Loading.js
import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = ({ loading }) => {
  return (
    <div className="loading-container">
      <HashLoader color="#36d7b7" loading={loading} size={50} />
    </div>
  );
};

export default Loading;
