import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  return (
    <Container>
      <Row>
        <div className="projects">
          <Col className="text-center">
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
              <div className="col-12 col-lg mb-2">
                <a
                  href="https://vidoozles-git-main-stasap.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectlink"
                >
                  <i className="fas fa-link fa-sm"></i> Vidoozles
                </a>
                <p className="link-description">
                  Developed and implemented a React-based web application
                  utilizing blockchain technology to create and sell
                  non-fungible tokens (NFTs). Implemented user authentication
                  via Metamask and authorization for secure buying and selling
                  of NFTs. Utilized React hooks and functional components for
                  efficient and maintainable code.
                </p>
              </div>
              <div className="col-12 col-lg mb-2">
                <a
                  href="https://www.furnituremovers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectlink"
                >
                  <i className="fas fa-link fa-sm"></i> FurnitureMovers.com 


                </a>
                <p className="link-description">
                  Developed experience with web scraping tools, including
                  BeautifulSoup and Python Requests, as well as with APIs and
                  working with JSON/XML data. Demonstrated proficiency in Python
                  and familiar with web scraping best practices, including
                  rate-limiting. Debugged and troubleshooted scraping issues.{" "}
                </p>
              </div>
              {/* <div className="col-12 col-lg mb-2">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  AI Image Generation
                </a>
                <p className="link-description">An AI-based image generation tool</p>
              </div> */}
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Projects;
