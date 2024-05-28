import React from 'react';

import Header from '../commonComponents/Header';
import MainSection from '../commonComponents/MainSection';
import Footer from '../commonComponents/Footer';

const Home = () => {
  const branchName = process.env.REACT_APP_BRANCH_NAME || 'Unknown';

  return (
    <>
      <h2>Current Branch: {branchName} </h2>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
};

export default Home;
