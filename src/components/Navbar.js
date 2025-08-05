import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      expanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    >
      <Container>
        <NavbarBrand as={Link} to="/" className="d-flex align-items-center">
          <FontAwesomeIcon icon={faShieldAlt} className="me-2" style={{ color: '#3498db' }} />
          <span style={{ fontWeight: '700', color: '#2c3e50' }}>Network Security Engineer</span>
        </NavbarBrand>
        
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.path}
                as={Link}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsExpanded(false)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 