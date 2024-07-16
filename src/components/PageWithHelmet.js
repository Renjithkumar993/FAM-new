const PageWithHelmet = ({ pageTitle, Component, breadcrumbs }) => (
    <>
      <HelmetWrapper pageTitle={`${pageTitle} - Fredericton Association of Malayalees`} description={`Learn more about ${pageTitle} at the Fredericton Association of Malayalees.`} />
      <HeaderCarousel pageTitle={pageTitle} breadcrumbs={breadcrumbs} />
      <Component />
    </>
  );
  