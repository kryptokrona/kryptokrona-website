import * as React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import xkrlogo from '../images/logo.png'

const Menubar = () => {
    return(
      <Navbar  expand="lg">
  <Container>
    <Navbar.Brand>
      <Link to='/'>
      <img src={xkrlogo} alt="Logo" height='36'/>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Link className='navLink' to='/get-started'>Get Started</Link>
        <Link className='navLink' to='/download'>Download</Link>
        <Link className='navLink' to='/hugin'>Hugin</Link>
        <Link className='navLink' to='/community'>Community</Link>
        <Link className='navLink' to='/info'>Info</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Menubar