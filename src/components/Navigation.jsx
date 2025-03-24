import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaPlane, FaMapMarkedAlt, FaEnvelope, FaCompass } from 'react-icons/fa';
import { destinations } from '../data/destinations';

const Navigation = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expand="lg" 
      className="navbar-custom" 
      fixed="top"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand" aria-label="TravelExplorer Home">
          <FaPlane className="brand-icon" aria-hidden="true" />
          <span>TravelExplorer</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="main-nav"
          aria-label="Toggle navigation menu"
        />
        
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto" activeKey={location.pathname}>
            <NavDropdown 
              title={
                <span className="nav-item-content">
                  <FaCompass className="nav-icon" aria-hidden="true" />
                  <span>Destinations</span>
                </span>
              }
              id="destinations-dropdown"
              className="nav-item"
            >
              {destinations.map(destination => (
                <NavDropdown.Item
                  key={destination.id}
                  as={Link}
                  to={`/destination/${destination.id}`}
                  onClick={() => setExpanded(false)}
                >
                  {destination.title}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/"
                onClick={() => setExpanded(false)}
              >
                View All Destinations
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link 
              as={Link} 
              to="/" 
              className="nav-item"
              active={location.pathname === '/'}
              onClick={() => setExpanded(false)}
              aria-label="Browse Destinations"
            >
              <FaMapMarkedAlt className="nav-icon" aria-hidden="true" />
              <span>Browse</span>
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className="nav-item"
              active={location.pathname === '/contact'}
              onClick={() => setExpanded(false)}
              aria-label="Contact Us"
            >
              <FaEnvelope className="nav-icon" aria-hidden="true" />
              <span>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;