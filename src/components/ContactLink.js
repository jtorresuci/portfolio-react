import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ContactLink.css";

const ContactLink = () => {
  const [activeLink, setActiveLink] = React.useState(-1);

  return (
    <Container>
      <Row>
        <div className="contact-link">
          <Col className="text-center">
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
              <Link
                to="/contact"
                className={`link col-12 col-lg mb-2 ${
                  activeLink === 0 ? "active" : ""
                }`}
                onClick={() => setActiveLink(0)}
              >
                <i className="fas fa-envelope fa-sm"></i> Contact Me
              </Link>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default ContactLink;
