import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCalendarAlt, faMapMarkerAlt, faGraduationCap, faBook, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const experiences = [];

  const learningActivities = [
    {
      icon: faGraduationCap,
      title: "Education",
      description: "Your academic background and relevant coursework"
    },
    {
      icon: faBook,
      title: "Self-Study",
      description: "Online courses, certifications, and learning resources"
    },
    {
      icon: faLaptopCode,
      title: "Hands-on Practice",
      description: "Labs, virtual environments, and practical exercises"
    },
    {
      icon: faShieldAlt,
      title: "Security Communities",
      description: "Participation in cybersecurity forums and groups"
    }
  ];

  return (
    <div className="section" id="experience">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Experience & Learning</h2>
            <p className="section-subtitle">
              My journey in network security and cybersecurity learning
            </p>
          </Col>
        </Row>

        {experiences.length === 0 ? (
          <Row>
            <Col lg={12}>
              <Card className="text-center py-5 border-0 shadow">
                <Card.Body>
                  <FontAwesomeIcon icon={faGraduationCap} className="text-muted mb-4" style={{ fontSize: '4rem' }} />
                  <h3 className="text-muted mb-3">Building My Experience</h3>
                  <p className="text-muted mb-4">
                    I'm currently focused on learning and developing my skills in network security. 
                    As I gain experience through internships, projects, and work opportunities, 
                    they will be documented here.
                  </p>
                  
                  <Row className="justify-content-center">
                    <Col lg={10}>
                      <h4 className="mb-4">Current Learning Focus</h4>
                      <Row>
                        {learningActivities.map((activity, index) => (
                          <Col lg={6} md={6} key={index} className="mb-4">
                            <div className="d-flex align-items-start p-3 bg-light rounded h-100">
                              <FontAwesomeIcon 
                                icon={activity.icon} 
                                className="text-primary me-3 mt-1" 
                                style={{ fontSize: '1.5rem' }}
                              />
                              <div className="text-start">
                                <h6 className="mb-2">{activity.title}</h6>
                                <p className="text-muted small mb-0">{activity.description}</p>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <h5 className="mb-3">What I'm Working On</h5>
                    <Row className="justify-content-center">
                      <Col md={8}>
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <FontAwesomeIcon icon={faBook} className="me-2 text-primary" />
                            Studying network security fundamentals and protocols
                          </li>
                          <li className="mb-2">
                            <FontAwesomeIcon icon={faLaptopCode} className="me-2 text-primary" />
                            Practicing with security tools and virtual labs
                          </li>
                          <li className="mb-2">
                            <FontAwesomeIcon icon={faShieldAlt} className="me-2 text-primary" />
                            Learning about threat detection and prevention
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faGraduationCap} className="me-2 text-primary" />
                            Pursuing relevant certifications and courses
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <div className="timeline">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="timeline-item">
                <div className="timeline-content">
                  <Card className="border-0 shadow">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h4 className="mb-1">{experience.title}</h4>
                          <h6 className="text-primary mb-2">{experience.company}</h6>
                        </div>
                        <div className="text-end">
                          <div className="text-muted small">
                            <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
                            {experience.period}
                          </div>
                          <div className="text-muted small">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
                            {experience.location}
                          </div>
                        </div>
                      </div>
                      
                      <p className="mb-3">{experience.description}</p>
                      
                      <div className="mb-3">
                        <h6 className="mb-2">Key Achievements:</h6>
                        <ul className="list-unstyled">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="mb-1">
                              <FontAwesomeIcon icon={faShieldAlt} className="me-2 text-primary" style={{ fontSize: '0.8rem' }} />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h6 className="mb-2">Technologies Used:</h6>
                        <div className="d-flex flex-wrap gap-1">
                          {experience.technologies.map((tech, idx) => (
                            <span key={idx} className="badge bg-light text-dark me-1">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        )}

        <Row className="mt-5">
          <Col lg={12}>
            <Card className="border-0 shadow">
              <Card.Body className="p-4">
                <h4 className="text-center mb-4">Learning Goals</h4>
                <Row>
                  <Col md={3} className="text-center mb-3">
                    <div className="h2 text-primary mb-2">0+</div>
                    <div className="text-muted">Years Experience</div>
                  </Col>
                  <Col md={3} className="text-center mb-3">
                    <div className="h2 text-primary mb-2">0+</div>
                    <div className="text-muted">Projects Completed</div>
                  </Col>
                  <Col md={3} className="text-center mb-3">
                    <div className="h2 text-primary mb-2">∞</div>
                    <div className="text-muted">Learning Potential</div>
                  </Col>
                  <Col md={3} className="text-center mb-3">
                    <div className="h2 text-primary mb-2">0+</div>
                    <div className="text-muted">Certifications</div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience; 