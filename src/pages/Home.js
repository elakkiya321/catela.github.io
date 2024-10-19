import React, { useEffect, useState } from 'react';

import Header from '../commonComponents/Header';
import MainSection from '../commonComponents/MainSection';
import Footer from '../commonComponents/Footer';
import generatedGitInfo from '../generatedGitInfo.json'
import axios from 'axios';

const Home = () => {
  const [branchInfo, setBranchInfo] = useState({ branch: '', details: '' });

  useEffect(() => {
    const fetchBranchInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/current-branch');
        console.log('response ',response)
        setBranchInfo(response.data);
      } catch (error) {
        console.error('Error fetching branch info:', error);
      }
    };

    fetchBranchInfo();
  }, []);
  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
};

export default Home;
