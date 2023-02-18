import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import projectData from "./projectData.json";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(2);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectData.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = Array.from(
    { length: Math.ceil(projectData.length / projectsPerPage) },
    (_, i) => i + 1
  );

  return (
    <Container>
      <Row>
        <div className="projects">
          <Col className="text-center">
            <nav className="mt-4 d-flex justify-content-center">
              <ul className="pagination">
                {pageNumbers.map((pageNumber) => (
                  <li key={pageNumber} className="page-item">
                    <button
                      className="page-link"
                      onClick={() => paginate(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="d-flex flex-wrap justify-content-center" > 
              {currentProjects.map((project) => (
                <div className="col-12 col-lg mb-2 " key={project.name} style={{ maxWidth: "600px", maxHeight: "600px", paddingRight: "3rem", paddingLeft:"3rem"}}>
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
