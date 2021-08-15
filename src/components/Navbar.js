import * as React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'

const Menubar = () => {
    return(
      <Navbar expand="lg">
  <Container>
    <Navbar.Brand>
      <Link to='/'>
      <img src={logo} alt="Logo" height='36'/>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link Variant='light'><Link to='/get-started'>Get Started</Link></Nav.Link>
        <Nav.Link><Link to='/download'>Download</Link></Nav.Link>
        <Nav.Link><Link to='/hugin'>Hugin</Link></Nav.Link>
        <Nav.Link><Link to='/community'>Community</Link></Nav.Link>
        <Nav.Link><Link to='/info'>Info</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Menubar