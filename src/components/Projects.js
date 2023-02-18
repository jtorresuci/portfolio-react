import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";

const projectData = [
  {
    name: "Vidoozles",
    link: "https://vidoozles-git-main-stasap.vercel.app",
    description:
      "Developed and implemented a React-based web application utilizing blockchain technology to create and sell non-fungible tokens (NFTs). Implemented user authentication via Metamask and authorization for secure buying and selling of NFTs. Utilized React hooks and functional components for efficient and maintainable code.",
  },
  {
    name: "FurnitureMovers.com",
    link: "https://www.furnituremovers.com",
    description:
      "Developed experience with web scraping tools, including BeautifulSoup and Python Requests, as well as with APIs and working with JSON/XML data. Demonstrated proficiency in Python and familiarity with web scraping best practices, including rate-limiting. Debugged and troubleshooted scraping issues.",
  },
  {
    name: "Packet Latency - Cisco Demo",
    link: "https://www.youtube.com/watch?v=eas8J5PdjdQ",
    description:
      "The project intends to provide a network delay indicator in order to finish the Minimal Viable Product (MVP) dubbed Sextant. The lightweight Node server Pylon, which transmits time-stamped packets to connected clients, will be used to calculate the latency. The project also makes requests for IPv4 and IPv6 addresses using the ipify API.",
  },
];

const Projects = () => {
  return (
    <Container>
      <Row>
        <div className="projects">
          <Col className="text-center">
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
              {projectData.map((project) => (
                <div className="col-12 col-lg mb-2" key={project.name}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectlink"
                  >
                    <i className="fas fa-link fa-sm"></i> {project.name}
                  </a>
                  <p className="link-description">{project.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Projects;
