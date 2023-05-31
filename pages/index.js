import React, { useState, useEffect } from 'react';
import Home from './Home';
import AdComponent from '../components/AdComponent';

const IndexPage = () => {
  const [shouldShowAd, setShouldShowAd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldShowAd(true);
    }, 5000); // Show ad after 5 seconds

    // Clean up function
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <>
      <Home />
      {shouldShowAd && <AdComponent />}
    </>
  );
};

export default IndexPage;
