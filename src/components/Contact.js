import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faPhone, faMapMarkerAlt, faShieldAlt 
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub as faGithubBrand, faTwitter as faTwitterBrand } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertVariant('danger');
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlertVariant('danger');
      setAlertMessage('Please enter a valid email address.');
      setShowAlert(true);
      return;
    }

    // Simulate form submission
    setAlertVariant('success');
    setAlertMessage('Thank you for your message! I will get back to you soon.');
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      value: "security.engineer@example.com",
      link: "mailto:security.engineer@example.com"
    },
    {
      icon: faPhone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: faMapMarkerAlt,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: faLinkedinIn,
      name: "LinkedIn",
      url: "https://linkedin.com/in/networksecurityengineer",
      color: "#0077b5"
    },
    {
      icon: faGithubBrand,
      name: "GitHub",
      url: "https://github.com/securityengineer",
      color: "#333"
    },
    {
      icon: faTwitterBrand,
      name: "Twitter",
      url: "https://twitter.com/securityeng",
      color: "#1da1f2"
    }
  ];

  return (
    <div className="section" id="contact">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Let's discuss your network security needs and how I can help protect your infrastructure
            </p>
          </Col>
        </Row>

        {showAlert && (
          <Row className="mb-4">
            <Col lg={12}>
              <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                {alertMessage}
              </Alert>
            </Col>
          </Row>
        )}

        <Row>
          <Col lg={8} className="mb-4">
            <Card className="contact-form">
              <Card.Body>
                <h4 className="mb-4">Send me a message</h4>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project inquiry, consultation, etc."
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your network security needs..."
                      required
                    />
                  </Form.Group>
                  
                  <Button type="submit" className="btn-custom btn-primary-custom">
                    <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <div className="mb-4">
              <h4 className="mb-4">Contact Information</h4>
              {contactInfo.map((info, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <FontAwesomeIcon 
                      icon={info.icon} 
                      className="text-primary" 
                      style={{ fontSize: '1.2rem' }}
                    />
                  </div>
                  <div>
                    <div className="fw-bold small">{info.title}</div>
                    <a 
                      href={info.link} 
                      className="text-decoration-none"
                      style={{ color: '#6c757d' }}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mb-4">
              <h5 className="mb-3">Connect with me</h5>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ 
                      color: social.color,
                      fontSize: '1.5rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
            
            <Card className="border-0 shadow">
              <Card.Body className="text-center">
                <FontAwesomeIcon 
                  icon={faShieldAlt} 
                  className="text-primary mb-3" 
                  style={{ fontSize: '3rem' }}
                />
                <h5>Available for</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">• Security Consultations</li>
                  <li className="mb-2">• Network Assessments</li>
                  <li className="mb-2">• Incident Response</li>
                  <li className="mb-2">• Security Training</li>
                  <li>• Project Collaborations</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact; 