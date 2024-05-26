import React from 'react';
import {Container, Row, Col,Button,Image} from 'react-bootstrap';
import styles from './css/Gallery.module.css';
import Gallery_image from './../assets/images/banner.jpg'

const Gallery = () => {
  return (
    <section className={styles.sectionStyle}>
      <Container>
        <Row>
          <Col lg={8} className='offset-lg-2 mb-5'>
            <h6 className={styles.subHeading}>CHECK OUR RECENT PROJECTS</h6>
            <h1 className={styles.mainHeading}>Photo Gallery</h1>
          </Col>
        </Row>
        <Row className={styles.GalleryRow}>
          <Col className={styles.GalleryCol} lg={8}>
            <Image alt='Gallery' src={Gallery_image} className={styles.GalleryImageBig} />
          </Col>
          <Col className={styles.GalleryCol} lg={4}>
            <Image alt='Gallery' src={Gallery_image} className={styles.GalleryImageSmall} />
            <Image alt='Gallery' src={Gallery_image} className={styles.GalleryImageSmall} />
          </Col>
          <Col className={styles.GalleryCol} lg={4}>
            <Image alt='Gallery' src={Gallery_image} className={styles.GalleryImageSmall} />
            <Image alt='Gallery' src={Gallery_image} className={styles.GalleryImageSmall} />
          </Col>
          <Col className={styles.GalleryCol} lg={8}>
            <Image alt='Gallery' src={Gallery_image} className={styles.GalleryImageBig} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
          <Button variant="link" className={styles.articleButton}>
              View more photos
            </Button>
          </Col>
        </Row>
        </Container>
        </section>
  )
};

export default Gallery;
