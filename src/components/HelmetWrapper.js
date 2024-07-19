import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetWrapper = ({ pageTitle, description, structuredData }) => (
  <Helmet>
    <title>{pageTitle}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://famnb.ca" />
    <link rel="icon" href="https://famnb.ca/favicon.ico" />
    {structuredData && <script type="application/ld+json">{JSON.stringify(structuredData)}</script>}
  </Helmet>
);

export default HelmetWrapper;
