import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import styles from './css/Banner.module.css';
import banner_rotating_img_small from './../assets/images/banner_rotating_img_small.png';

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Container>
        <Row>
          <Col lg={7}>
            <div className={styles.bannerImg}>
              <Image src={banner_rotating_img_small} alt="banner" />
            </div>
            <h1 className={styles.bannerHeading}>The best events start here</h1>
            <h2 className={styles.bannerSubHeading}>Quality Ingredients. Top Talent. Genuine Hospitality.</h2>
            <Button variant="success" className={styles.bannerButton}>
              Get a Quote
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
