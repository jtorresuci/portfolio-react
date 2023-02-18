import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Socials from "./Socials";
import "./Footer.css"

function Footer({githubLink, linkedinLink, resumeLink}) {
  const email = "jtorresuci@gmail.com";

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col>
            <p>Full Stack Software Developer</p>
          </Col>
          <Col className="text-right">
            <p style={{ alignItems: "center" }}>
              <span style={{ marginRight: "10px" }}>Jose Torres</span> 
              <a
                style={{ display: "inline-block", marginRight: "10px", textDecoration:"none", color:"#74dbef", paddingBottom:".5rem" }}
                href={`mailto:${email}`}
                onClick={handleEmailClick}
              >
              <i className="fas fa-link fa-sm"> </i>
                {email}
              </a>
              <a
                style={{ display: "inline-block", marginRight: "10px", color:"#74dbef" }}
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a
                style={{ display: "inline-block", marginRight: "10px", color:"#74dbef" }}
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a
                style={{ display: "inline-block", marginRight: "10px", color:"#74dbef" }}
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-file fa-lg"></i>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
