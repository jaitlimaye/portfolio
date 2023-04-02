import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'

const NavbarComp = () => {
  return (
    <div> <Navbar bg="primary" variant="light">
    <Container>
      <Navbar.Brand as={Link} to="/">Jait Limaye</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/skills"><div class="navlinks">Skills</div></Nav.Link>
        <Nav.Link as={Link} to="/projects"><div class="navlinks">Projects</div></Nav.Link>
        <Nav.Link as={Link} to="/resume"><div class="navlinks">Resume</div></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
 </div>
  )
}

export default NavbarComp