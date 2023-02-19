import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
    setIsError(false);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Contact Us</h2>
          {isSubmitted && (
            <div className="alert alert-success" role="alert">
              Thank you for your message! We will get back to you as soon as possible.
              <button type="button" className="close" aria-label="Close" onClick={handleReset}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          {isError && (
            <div className="alert alert-danger" role="alert">
              An error occurred while submitting the form. Please try again later.
              <button type="button" className="close" aria-label="Close" onClick={handleReset}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          {!isSubmitted && !isError && (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
