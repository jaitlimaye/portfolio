import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'

const NavbarComp = () => {
  return (
    <div> <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">Jait Limaye</Navbar.Brand>
      <Nav className="ms-auto">
      <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
 </div>
  )
}

export default NavbarComp