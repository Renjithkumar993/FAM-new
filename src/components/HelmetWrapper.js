import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetWrapper = ({ pageTitle, description }) => (
  <Helmet>
    <title>{pageTitle}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default HelmetWrapper;
