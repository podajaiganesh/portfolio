import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: faLinkedinIn,
      url: "https://linkedin.com/in/networksecurityengineer",
      name: "LinkedIn"
    },
    {
      icon: faGithub,
      url: "https://github.com/securityengineer",
      name: "GitHub"
    },
    {
      icon: faTwitter,
      url: "https://twitter.com/securityeng",
      name: "Twitter"
    }
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="text-center text-lg-start mb-3 mb-lg-0">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <FontAwesomeIcon icon={faShieldAlt} className="me-2" style={{ fontSize: '1.5rem' }} />
              <span className="fw-bold">Network Security Engineer</span>
            </div>
            <p className="text-muted small mt-2 mb-0">
              Protecting digital infrastructure through advanced security solutions
            </p>
          </Col>
          
          <Col lg={4} className="text-center mb-3 mb-lg-0">
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3"
                  title={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </Col>
          
          <Col lg={4} className="text-center text-lg-end">
            <p className="text-muted small mb-0">
              © {currentYear} Network Security Engineer. All rights reserved.
            </p>
            <p className="text-muted small mb-0">
              Built with React & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 