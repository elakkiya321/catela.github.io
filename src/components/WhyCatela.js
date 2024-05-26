import React from 'react';
import {Container, Row, Col,Button,Image} from 'react-bootstrap';
import styles from './css/WhyCatela.module.css';
import leaf from './../assets/images/leaf.svg'

const servicePointsHead = ['Best Chef Cook','Delicious Food','High Quality Services','Seasonal Menus','Local Sourced Ingredients','Fits Your Budget']
const WhyCatela = () => {
  return (
    <section className={styles.sectionStyle}>
      <Container>
        <Row>
          <Col lg={8} className='offset-lg-2 mb-5'>
            <h6 className={styles.subHeading}>Why Catela</h6>
            <h1 className={styles.mainHeading}>Satisfaction Guaranteed</h1>
          </Col>
        </Row>
        <Row>
          {servicePointsHead.map((item,index) =>
        (
          <Col lg={4} key={index}>
            <article className={[styles.servicePointsBlock,'text-center mb-5'].join(' ')}>
            <Image alt='leaf' src={leaf} width={50} height={50} />
            <h3 className={styles.servicePointsHead}>{item}</h3>
            <p className={styles.servicePointsDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>
            </article>
          </Col>

        )
        )}
        </Row>
        <Row>
          <Col lg={12} style={{textAlign:'center'}}>
        <p className={styles.paraContent}>Call us now <strong style={{color:'#09574a'}}><a href='tel:+911234567890' className='text-reset text-decoration-none'>+91 12345 67890</a></strong> or request a quote without obligation.</p>
        <Button variant='primary' className={styles.requestBtn}>request a quote now</Button>
        </Col>
        </Row>
        </Container>
        </section>
  )
};

export default WhyCatela;
