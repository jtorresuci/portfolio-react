import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import Logo from "./logo.png";

function Banner({ name, title, githubLink, linkedinLink, resumeLink }) {
  return (
    <div className="banner">

        <Row>
        <Col className="text-center" style={{ padding: 0, marginTop: 0 }}>
            <h1 className="">{name}</h1>
            <h2 className="">{title}</h2>
            <div className="icon-links text-flicker-in-glow ">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                <i className="far fa-file fa-lg"></i>
              </a>
            </div>
          </Col>
        </Row>

    </div>
  );
}

export default Banner;
