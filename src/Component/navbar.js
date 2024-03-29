import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brandLogo from '../assets/brand-logo.png'
import { NavLink } from 'react-router-dom';

const NavBar = (props)=>{
  return <> 
      <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
      <Navbar.Brand as={NavLink} to="/">
            <img
              alt=""
              src={brandLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Photo Gallery
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='me-auto' >
          <Nav.Link as={NavLink} to="/">Home</Nav.Link></Nav>
          <Nav className="justify-content-end">
           
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            
            <Nav.Link as={NavLink} to="/contact" md='auto'>Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
}

export default NavBar;