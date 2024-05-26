import React from 'react';
import NavbarCompo from '../components/Navbar';
import Banner from '../components/Banner';
import styles from './css/Header.module.css';

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <NavbarCompo />
      <Banner />
    </header>
  );
};

export default Header;
