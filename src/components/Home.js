import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faNetworkWired, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  console.log('Home component rendering'); // Debug log
  
  return (
    <div className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content fade-in">
            <h1>Hi, I'm Jai Ganesh Poda</h1>
            <h2 className="mb-3">Aspiring Network Security Engineer</h2>
            <p className="mb-4">
              Passionate about cybersecurity and network security, currently learning and building 
              my skills in threat detection, network defense, and security technologies. 
              Eager to contribute to protecting digital infrastructure and advancing in the field.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button 
                as={Link} 
                to="/about" 
                className="btn-custom btn-primary-custom"
                size="lg"
              >
                Learn More About Me
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </Button>
              <Button 
                as={Link} 
                to="/contact" 
                variant="outline-light" 
                className="btn-custom"
                size="lg"
              >
                Get In Touch
              </Button>
            </div>
          </Col>
          <Col lg={6} className="text-center slide-in-right">
            <div className="hero-icons">
              <div className="d-flex justify-content-center gap-4 mb-4">
                <div className="hero-icon">
                  <FontAwesomeIcon icon={faShieldAlt} size="3x" />
                </div>
                <div className="hero-icon">
                  <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                </div>
                <div className="hero-icon">
                  <FontAwesomeIcon icon={faLock} size="3x" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home; 