import React from 'react';

import Header from '../commonComponents/Header';
import MainSection from '../commonComponents/MainSection';
import Footer from '../commonComponents/Footer';
import generatedGitInfo from '../generatedGitInfo.json'

const Home = () => {

  return (
    <>
      <h2>Current Branch: {generatedGitInfo.gitBranch} </h2>
      <h2>Current Branch: {process.env.REACT_APP_BRANCH_NAME} </h2>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
};

export default Home;
