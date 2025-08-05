import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faNetworkWired, faEye, faCogs, faChartLine, faGraduationCap, faBook, faCloud } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const learningAreas = [
    {
      icon: faNetworkWired,
      title: "Core Technical Skills (Networking)",
      description: "Network protocols, routing, switching, and infrastructure"
    },
    {
      icon: faCloud,
      title: "Cloud Platform Skills",
      description: "AWS services, cloud architecture, and deployment"
    },
    {
      icon: faShieldAlt,
      title: "Network Security Skills",
      description: "Security protocols, firewalls, and threat protection"
    },
    {
      icon: faCogs,
      title: "Scripting & Automation",
      description: "Automation tools and scripting for network management"
    },
    {
      icon: faEye,
      title: "Monitoring & Troubleshooting",
      description: "Network monitoring, diagnostics, and problem resolution"
    },
    {
      icon: faChartLine,
      title: "Cloud Concepts & Fundamentals",
      description: "Cloud computing principles and best practices"
    }
  ];

  return (
    <div className="section" id="about">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about cybersecurity and eager to learn and grow in the field
            </p>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
          <Col lg={6} className="fade-in">
            <h3 className="mb-4">My Journey</h3>
            <p className="mb-3">
              I am Jai Ganesh Poda, an aspiring Network Security Engineer with a strong passion for 
              cybersecurity and protecting digital assets. I'm currently focused on learning 
              the fundamentals of network security, threat detection, and security technologies.
            </p>
            <p className="mb-3">
              My goal is to develop expertise in cybersecurity and contribute to creating 
              secure, resilient networks. I'm committed to continuous learning and staying 
              updated with the latest security trends and best practices.
            </p>
            <p>
              I believe in the importance of cybersecurity in today's digital world and 
              am excited to be part of this dynamic and ever-evolving field.
            </p>
          </Col>
          <Col lg={6} className="slide-in-right">
            <Card className="border-0 shadow">
              <Card.Body className="p-4">
                <h4 className="mb-3">Education & Learning</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faGraduationCap} className="me-2 text-primary" />
                    [Your Degree/Education] - [Your Institution]
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faBook} className="me-2 text-primary" />
                    Currently studying Network Security fundamentals
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faShieldAlt} className="me-2 text-primary" />
                    Learning cybersecurity concepts and tools
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faNetworkWired} className="me-2 text-primary" />
                    Exploring network protocols and security measures
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCogs} className="me-2 text-primary" />
                    Hands-on practice with security tools and technologies
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <h3 className="text-center mb-5">Areas of Learning</h3>
          </Col>
        </Row>
        
        <Row>
          {learningAreas.map((area, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="skill-item">
                <FontAwesomeIcon icon={area.icon} className="skill-icon" />
                <h5 className="mb-2">{area.title}</h5>
                <p className="text-muted mb-0">{area.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About; 