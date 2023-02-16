import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Container>
      <Navbar.Brand href="#home">Jose Torres</Navbar.Brand>


        <Nav className="navbar-right nowrap">
          <Nav.Link href=""><i className="fa-brands fa-github"></i></Nav.Link>
          <Nav.Link href="#link"><i className='fab fa-linkedin-in'></i></Nav.Link>
        </Nav>

    </Container>
  </Navbar>
  )
}

export default Header
