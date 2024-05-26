import React from 'react';
import styles from './css/Footer.module.css';
import { Button, Col, Container, Form, InputGroup, Row, Image } from 'react-bootstrap';
import { BsFacebook,BsTwitterX,BsInstagram,BsPinterest,BsYoutube } from "react-icons/bs";
import footer_logo from './../assets/images/leaf.svg'
import footer_line from './../assets/images/footer_line.png'

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <Container>
        <Row>
          <Col lg={12} style={{textAlign:'center'}}>
            <Image alt='footer logo' src={footer_logo} width={75} style={{marginBottom: '2rem'}} />
          </Col>
          <Col lg={2}>
            <h5 className="mb-4">Find Us</h5>
            <p>2972 Westmer Rd. Santa Ana, Illinois 85486</p>
          </Col>
          <Col lg={2}>
            <h5 className="mb-4">Contact Us</h5>
            <p><a className='text-reset text-decoration-none' href='tel:+916383370152'>+91 63833 70152</a> </p>
            <p><a className='text-reset text-decoration-none' href='mailto:elakkiya321@gmail.com'>elakkiya321@gmail.com</a> </p>
            <p>
              Mon - Sat: 10am - 6pm <br /> Sunday: Closed
            </p>
          </Col>
          <Col lg={4} className="text-center">
            <p>Let’s create unforgettable moments with exceptional catering! </p>
            <h5 className="mb-4">Join our email list</h5>
            <InputGroup className={styles.footerSubscribeInputGroup}>
              <Form.Control placeholder="User email..." aria-label="User email..." aria-describedby="subscribe" className={styles.footerSubscribeInputControl} />
              <Button variant="light" id="subscribe"  className={styles.footerSubscribeButton}>
                subscribe
              </Button>
            </InputGroup>
          </Col>
          <Col lg={2}>
            <h5 className="mb-4">Explore</h5>
            <ul className={`list-unstyled ${styles.footerLinks} `}>
              <li>
                <a href="/">About Us </a>{' '}
              </li>
              <li>
                <a href="/">Menus </a>{' '}
              </li>
              <li>
                <a href="/">Gallery </a>{' '}
              </li>
              <li>
                <a href="/">Blog </a>{' '}
              </li>
              <li>
                <a href="/">Contact</a>{' '}
              </li>
            </ul>
          </Col>
          <Col lg={2}>
            <h5 className="mb-4">Events</h5>
            <ul className={`list-unstyled ${styles.footerLinks} `}>
              <li>
                <a href="/">Corporate </a>{' '}
              </li>
              <li>
                <a href="/">Wedding </a>{' '}
              </li>
              <li>
                <a href="/">Social Events </a>{' '}
              </li>
              <li>
                <a href="/">Parties </a>{' '}
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Image alt='footer line' src={footer_line} width='100%' style={{marginBlock: '2rem'}} />
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <p>Copyright &copy; 2024 Catela. All rights reserved </p>
          </Col>
          <Col lg={6}>
            <ul className={[styles.socialLinks,'list-unstyled'].join(' ')}>
              <li>FOLLOW US</li>
              <li><a href='/' ><BsFacebook /></a></li>
              <li><a href='/' ><BsTwitterX /></a></li>
              <li><a href='/' ><BsInstagram /></a></li>
              <li><a href='/' ><BsPinterest /></a></li>
              <li><a href='/' ><BsYoutube /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
