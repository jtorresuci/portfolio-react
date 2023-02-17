import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  return (
    <Container>
      <Row>
        <div className="projects">
          <Col className="text-center">
            <h2 className="title">Projects</h2>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
              <a
                href="https://vidoozles-git-main-stasap.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="link col-12 col-lg mb-2"
              >
                Vidoozles
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="link col-12 col-lg mb-2"
              >
                FurnitureMovers.com
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="link col-12 col-lg mb-2"
              >
                AI Image Generation
              </a>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Projects;
