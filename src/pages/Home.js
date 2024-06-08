import React from 'react';

import Header from '../commonComponents/Header';
import MainSection from '../commonComponents/MainSection';
import Footer from '../commonComponents/Footer';
import generatedGitInfo from '../generatedGitInfo.json'

const Home = () => {

  return (
    <>
      <h2>Current Branch test: {generatedGitInfo.gitBranch} </h2>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
};

export default Home;
