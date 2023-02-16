import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './components/CustomNavbar';
import GithubCard from './components/GithubCard';
// import banner from '/banner.png';

function App() {
  return (
    <div style={{ backgroundColor: '#111111' }}>
      <CustomNavbar />

      <Container fluid>
        <Row>
          <Col md={3} className="bg-primary text-white d-flex flex-column p-4" style={{ height: '100vh' }}>
            <div className="mb-4">
              {/* <img src="/Banner.png" alt="My logo" width="80%" /> */}
            </div>
            <div className="mb-auto">
              <h5 className="mb-3">Jose Torres</h5>
              <p className="mb-3">
                <i className="fa fa-phone"></i> (555) 555-5555
              </p>
              <p className="mb-3">
                <i className="fa fa-envelope"></i> jose.torres@email.com
              </p>
              <p>
                <i className="fa fa-map-marker"></i> 123 Main St, Anytown, USA
              </p>
            </div>
          </Col>

          <Col md={3} className="p-4">
          <GithubCard username="jtorresuci" />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
