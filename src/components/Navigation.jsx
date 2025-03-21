import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaPlane, FaMapMarkedAlt, FaEnvelope } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <FaPlane className="brand-icon" />
          <span>TravelExplorer</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-nav" />
        
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto" activeKey={location.pathname}>
            <Nav.Link 
              as={Link} 
              to="/" 
              className="nav-item"
              active={location.pathname === '/'}
            >
              <FaMapMarkedAlt className="nav-icon" />
              <span>Destinations</span>
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className="nav-item"
              active={location.pathname === '/contact'}
            >
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;