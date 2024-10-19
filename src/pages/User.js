import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import bannerImage from './../assets/images/banner.jpg';
import { useDispatch } from 'react-redux';
import { UserRegister } from '../store/action/authAction';

const Login = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const Register = () => {
  const [fields, setFields] = useState({
    formBasicUserName: '',
    formBasicEmail: '',
    formBasicPassword: '',
    formBasicConfirmPassword: '',
  });

  const [loadImage, setLoadImage] = useState(bannerImage);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFields({
        ...fields,
        [e.target.name]: e.target.files[0],
      });
    }

    const reader = new FileReader();
    reader.onload = () => {
      setLoadImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log('form fields ', fields);
    const { formBasicUserName, formBasicEmail, formBasicPassword, formBasicConfirmPassword } = fields;

    const formData = new FormData();

    formData.append('formBasicUserName', formBasicUserName);
    formData.append('formBasicEmail', formBasicEmail);
    formData.append('formBasicPassword', formBasicPassword);
    formData.append('formBasicConfirmPassword', formBasicConfirmPassword);
    formData.append('formImage', loadImage);

    dispatch(UserRegister(formData));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="User Name"
                name="formBasicUserName"
                onChange={handleInputChange}
                value={fields.formBasicUserName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="formBasicEmail"
                onChange={handleInputChange}
                value={fields.formBasicEmail}
              />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="formBasicPassword"
                onChange={handleInputChange}
                value={fields.formBasicPassword}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="formBasicConfirmPassword"
                onChange={handleInputChange}
                value={fields.formBasicConfirmPassword}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose Image</Form.Label>
              <Row>
                <Col md={3}>
                  <Image width={100} height={100} src={loadImage} roundedCircle />
                </Col>
                <Col md={9}>
                  <Form.Control type="file" onChange={handleFileChange} name="formFile" />
                </Col>
              </Row>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export { Login, Register };
