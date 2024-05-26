import React from 'react';
import {Container, Row, Col,Button,Image} from 'react-bootstrap';
import styles from './css/WhatWeDo.module.css';
import Corporate_image from './../assets/images/banner.jpg'

const WhatWeDo = () => {
  return (
    <section className={styles.sectionStyle}>
      <Container>
        <Row>
          <Col lg={8}  className='offset-lg-2 mb-5'>
            <h6 className={styles.subHeading}>What We Do</h6>
            <h1 className={styles.mainHeading}>Events We Cater</h1>
            <p className={styles.paraContent}>We provide catering for company events and drink parties. Full-service catering with drinks, canapes, luxury appetizers, waiting staff, and rental materials. Plenty of vegetarian and vegan options!</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <article className={styles.articleStyle}>
              <h2 className={[styles.articleHeading,'text-white mb-4'].join(' ')}>Corporate</h2>
              <Image alt="Corporate" src={Corporate_image} className={[styles.articleImage,'img-fluid'].join(' ')} />
              <Button variant="link" className={styles.articleButton}>
              Learn More
            </Button>
            </article>
            </Col>
            <Col lg={6}>
            <article className={styles.articleStyle}>
              <h2 className={[styles.articleHeading,'text-white mb-4'].join(' ')}>Weddings</h2>
              <Image alt="Corporate" src={Corporate_image} className={[styles.articleImage,'img-fluid'].join(' ')} />
              <Button variant="link" className={styles.articleButton}>
              Learn More
            </Button>
            </article>
            </Col>
            <Col lg={6}>
            <article className={styles.articleStyle}>
              <h2 className={[styles.articleHeading,'text-white mb-4'].join(' ')}>Social Events</h2>
              <Image alt="Corporate" src={Corporate_image} className={[styles.articleImage,'img-fluid'].join(' ')} />
              <Button variant="link" className={styles.articleButton}>
              Learn More
            </Button>
            </article>
            </Col>
            <Col lg={6}>
            <article className={styles.articleStyle}>
              <h2 className={[styles.articleHeading,'text-white mb-4'].join(' ')}>Parties</h2>
              <Image alt="Corporate" src={Corporate_image} className={[styles.articleImage,'img-fluid'].join(' ')} />
              <Button variant="link" className={styles.articleButton}>
              Learn More
            </Button>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default WhatWeDo;
