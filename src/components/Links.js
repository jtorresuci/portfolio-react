import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Links.css";

const MyLinks = () => {
    const [activeLink, setActiveLink] = React.useState(-1);

  return (
    <Container>
      <Row>
        <div className="mylinks">
          <Col className="text-center">
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
              <Link
                to="/"
                className={`link col-12 col-lg mb-2 ${
                  activeLink === 0 ? "active" : ""
                }`}
                onClick={() => setActiveLink(0)}
              > 
               <i class="fas fa-map-signs fa-sm"></i> Repos
              </Link>
              <Link
                to="/projects"
                className={`link col-12 col-lg mb-2 ${
                  activeLink === 1 ? "active" : ""
                }`}
                onClick={() => setActiveLink(1)}
              >
                <i class="fas fa-map-signs fa-sm"></i> Projects 

              </Link>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default MyLinks;
