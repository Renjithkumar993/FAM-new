import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetWrapper = ({ pageTitle, description, structuredData }) => {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href="https://famnb.ca/" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Fredericton Association of Malayalees" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://famnb.ca/" />
      <meta property="og:image" content="https://famnb.ca/images/logofam.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://famnb.ca/images/logofam.jpg" />

      <meta name="keywords" content="malayalees in new brunswick, malayalees in fredericton, kerala new brunswick, kerala fredericton, indians in fredericton, indians in new brunswick, indian community in fredericton, indian community in new brunswick, fredericton association of malayalees, FAM, kerala canada, fredericton kerala association, Malayalees in Canada" />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default HelmetWrapper;
