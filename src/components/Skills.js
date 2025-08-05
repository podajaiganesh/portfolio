import React, { useState } from 'react';
import { Container, Row, Col, ProgressBar, Card, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, faNetworkWired, faLock, faServer, 
  faCode, faDatabase, faCloud, faTools, faPlus, faEdit, faTrash, faLock as faLockIcon
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  // Simple authentication state - you can change this password
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Your secret password - change this to something secure
  const OWNER_PASSWORD = 'admin123';

  const handleAuth = (e) => {
    e.preventDefault();
    if (password === OWNER_PASSWORD) {
      setIsAuthenticated(true);
      setShowAuthModal(false);
      setPassword('');
      setAuthError('');
    } else {
      setAuthError('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const [skillCategories, setSkillCategories] = useState([
    {
      title: "Core Technical Skills (Networking)",
      icon: faNetworkWired,
      skills: [
        { name: "Network Protocols", level: 85 },
        { name: "Routing & Switching", level: 80 },
        { name: "Network Infrastructure", level: 75 },
        { name: "TCP/IP", level: 90 }
      ]
    },
    {
      title: "Cloud Platform Skills",
      icon: faCloud,
      skills: [
        { name: "AWS Services", level: 85 },
        { name: "Cloud Architecture", level: 80 },
        { name: "Cloud Deployment", level: 75 },
        { name: "AWS CLI", level: 70 }
      ]
    },
    {
      title: "Network Security Skills",
      icon: faShieldAlt,
      skills: [
        { name: "Security Protocols", level: 80 },
        { name: "Firewall Management", level: 75 },
        { name: "Threat Protection", level: 70 },
        { name: "VPN Technologies", level: 75 }
      ]
    },
    {
      title: "Scripting & Automation",
      icon: faCode,
      skills: [
        { name: "Python", level: 70 },
        { name: "Bash Scripting", level: 75 },
        { name: "PowerShell", level: 65 },
        { name: "Automation Tools", level: 70 }
      ]
    },
    {
      title: "Monitoring & Troubleshooting",
      icon: faTools,
      skills: [
        { name: "Network Monitoring", level: 80 },
        { name: "Diagnostics", level: 75 },
        { name: "Problem Resolution", level: 70 },
        { name: "Performance Analysis", level: 75 }
      ]
    },
    {
      title: "Cloud Concepts & Fundamentals",
      icon: faLock,
      skills: [
        { name: "Cloud Computing", level: 85 },
        { name: "Best Practices", level: 80 },
        { name: "Cloud Security", level: 75 },
        { name: "Scalability", level: 70 }
      ]
    }
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: "AWS Certified Solutions Architect (Associate)",
      issuer: "Amazon Web Services",
      date: "2024",
      expiry: "2027",
      credentialId: "AWS-SAA"
    },
    {
      id: 2,
      name: "AWS Certified Advanced Networking – Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      expiry: "2027",
      credentialId: "AWS-ANS"
    },
    {
      id: 3,
      name: "CompTIA Network+",
      issuer: "CompTIA",
      date: "2024",
      expiry: "2027",
      credentialId: "COMPTIA-NET+"
    },
    {
      id: 4,
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2024",
      expiry: "2027",
      credentialId: "COMPTIA-SEC+"
    },
    {
      id: 5,
      name: "CompTIA Cloud+",
      issuer: "CompTIA",
      date: "2024",
      expiry: "2027",
      credentialId: "COMPTIA-CLOUD+"
    },
    {
      id: 6,
      name: "AWS Certified Cloud Practitioner (CLF-02)",
      issuer: "Amazon Web Services",
      date: "2024",
      expiry: "2027",
      credentialId: "AWS-CLF-02"
    }
  ]);

  const [languages, setLanguages] = useState([
    { id: 1, name: "English", proficiency: "Native", level: 100 }
  ]);

  // Modal states
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [editingCert, setEditingCert] = useState(null);
  const [editingLang, setEditingLang] = useState(null);

  // Form data states
  const [skillFormData, setSkillFormData] = useState({
    category: '',
    skillName: '',
    level: 50
  });

  const [certFormData, setCertFormData] = useState({
    name: '',
    issuer: '',
    date: '',
    expiry: '',
    credentialId: ''
  });

  const [langFormData, setLangFormData] = useState({
    name: '',
    proficiency: '',
    level: 50
  });

  const getProgressVariant = (level) => {
    if (level >= 90) return 'success';
    if (level >= 80) return 'info';
    if (level >= 70) return 'warning';
    return 'danger';
  };

  // Authentication check functions
  const requireAuth = (action) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return false;
    }
    return true;
  };

  // Skill management functions
  const handleAddSkill = () => {
    if (!requireAuth('add skill')) return;
    setEditingSkill(null);
    setSkillFormData({ category: '', skillName: '', level: 50 });
    setShowSkillModal(true);
  };

  const handleEditSkill = (categoryIndex, skillIndex) => {
    if (!requireAuth('edit skill')) return;
    const category = skillCategories[categoryIndex];
    const skill = category.skills[skillIndex];
    setEditingSkill({ categoryIndex, skillIndex });
    setSkillFormData({
      category: category.title,
      skillName: skill.name,
      level: skill.level
    });
    setShowSkillModal(true);
  };

  const handleDeleteSkill = (categoryIndex, skillIndex) => {
    if (!requireAuth('delete skill')) return;
    if (window.confirm('Are you sure you want to delete this skill?')) {
      const updatedCategories = [...skillCategories];
      updatedCategories[categoryIndex].skills.splice(skillIndex, 1);
      setSkillCategories(updatedCategories);
    }
  };

  const handleSkillSubmit = (e) => {
    e.preventDefault();
    const updatedCategories = [...skillCategories];
    
    if (editingSkill) {
      // Edit existing skill
      updatedCategories[editingSkill.categoryIndex].skills[editingSkill.skillIndex] = {
        name: skillFormData.skillName,
        level: parseInt(skillFormData.level)
      };
    } else {
      // Add new skill to existing category
      const categoryIndex = updatedCategories.findIndex(cat => cat.title === skillFormData.category);
      if (categoryIndex !== -1) {
        updatedCategories[categoryIndex].skills.push({
          name: skillFormData.skillName,
          level: parseInt(skillFormData.level)
        });
      }
    }
    
    setSkillCategories(updatedCategories);
    setShowSkillModal(false);
  };

  // Certification management functions
  const handleAddCert = () => {
    if (!requireAuth('add certification')) return;
    setEditingCert(null);
    setCertFormData({ name: '', issuer: '', date: '', expiry: '', credentialId: '' });
    setShowCertModal(true);
  };

  const handleEditCert = (cert) => {
    if (!requireAuth('edit certification')) return;
    setEditingCert(cert);
    setCertFormData({
      name: cert.name,
      issuer: cert.issuer,
      date: cert.date,
      expiry: cert.expiry,
      credentialId: cert.credentialId
    });
    setShowCertModal(true);
  };

  const handleDeleteCert = (certId) => {
    if (!requireAuth('delete certification')) return;
    if (window.confirm('Are you sure you want to delete this certification?')) {
      setCertifications(certifications.filter(cert => cert.id !== certId));
    }
  };

  const handleCertSubmit = (e) => {
    e.preventDefault();
    const newCert = {
      id: editingCert ? editingCert.id : Date.now(),
      name: certFormData.name,
      issuer: certFormData.issuer,
      date: certFormData.date,
      expiry: certFormData.expiry,
      credentialId: certFormData.credentialId
    };

    if (editingCert) {
      setCertifications(certifications.map(cert => cert.id === editingCert.id ? newCert : cert));
    } else {
      setCertifications([...certifications, newCert]);
    }
    setShowCertModal(false);
  };

  // Language management functions
  const handleAddLang = () => {
    if (!requireAuth('add language')) return;
    setEditingLang(null);
    setLangFormData({ name: '', proficiency: '', level: 50 });
    setShowLangModal(true);
  };

  const handleEditLang = (lang) => {
    if (!requireAuth('edit language')) return;
    setEditingLang(lang);
    setLangFormData({
      name: lang.name,
      proficiency: lang.proficiency,
      level: lang.level
    });
    setShowLangModal(true);
  };

  const handleDeleteLang = (langId) => {
    if (!requireAuth('delete language')) return;
    if (window.confirm('Are you sure you want to delete this language?')) {
      setLanguages(languages.filter(lang => lang.id !== langId));
    }
  };

  const handleLangSubmit = (e) => {
    e.preventDefault();
    const newLang = {
      id: editingLang ? editingLang.id : Date.now(),
      name: langFormData.name,
      proficiency: langFormData.proficiency,
      level: parseInt(langFormData.level)
    };

    if (editingLang) {
      setLanguages(languages.map(lang => lang.id === editingLang.id ? newLang : lang));
    } else {
      setLanguages([...languages, newLang]);
    }
    setShowLangModal(false);
  };

  return (
    <div className="section" id="skills">
      <Container>
        {/* Authentication Status */}
        {isAuthenticated && (
          <Row className="mb-3">
            <Col lg={12}>
              <div className="d-flex justify-content-between align-items-center p-3 bg-success bg-opacity-10 rounded">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faLockIcon} className="text-success me-2" />
                  <span className="text-success fw-bold">Admin Mode Active</span>
                </div>
                <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </Col>
          </Row>
        )}

        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Comprehensive expertise in network security technologies and methodologies
            </p>
          </Col>
        </Row>

        {/* Technical Skills Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3>Technical Skills</h3>
              {isAuthenticated && (
                <Button onClick={handleAddSkill} className="btn-custom btn-primary-custom" size="sm">
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Add Skill
                </Button>
              )}
            </div>
          </Col>
        </Row>

        <Row>
          {skillCategories.map((category, categoryIndex) => (
            <Col lg={6} md={6} key={categoryIndex} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon 
                      icon={category.icon} 
                      className="skill-icon me-3" 
                      style={{ fontSize: '2rem' }}
                    />
                    <h5 className="mb-0">{category.title}</h5>
                  </div>
                  
                  {category.skills.length === 0 ? (
                    <p className="text-muted text-center py-3">No skills added yet. {isAuthenticated && 'Click "Add Skill" to get started!'}</p>
                  ) : (
                    category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="small">{skill.name}</span>
                          <div className="d-flex align-items-center">
                            <span className="small text-muted me-2">{skill.level}%</span>
                            {isAuthenticated && (
                              <>
                                <Button 
                                  variant="outline-warning" 
                                  size="sm" 
                                  className="me-1"
                                  onClick={() => handleEditSkill(categoryIndex, skillIndex)}
                                >
                                  <FontAwesomeIcon icon={faEdit} style={{ fontSize: '0.7rem' }} />
                                </Button>
                                <Button 
                                  variant="outline-danger" 
                                  size="sm"
                                  onClick={() => handleDeleteSkill(categoryIndex, skillIndex)}
                                >
                                  <FontAwesomeIcon icon={faTrash} style={{ fontSize: '0.7rem' }} />
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                        <ProgressBar 
                          now={skill.level} 
                          variant={getProgressVariant(skill.level)}
                          className="mb-2"
                          style={{ height: '8px', borderRadius: '4px' }}
                        />
                      </div>
                    ))
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Certifications Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3>Certifications</h3>
              {isAuthenticated && (
                <Button onClick={handleAddCert} className="btn-custom btn-primary-custom" size="sm">
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Add Certification
                </Button>
              )}
            </div>
          </Col>
        </Row>

        {certifications.length === 0 ? (
          <Row>
            <Col lg={12}>
              <Card className="text-center py-5">
                <Card.Body>
                  <FontAwesomeIcon icon={faShieldAlt} className="text-muted mb-3" style={{ fontSize: '3rem' }} />
                  <h5 className="text-muted">No certifications added yet</h5>
                  <p className="text-muted">Add your professional certifications to showcase your expertise</p>
                  {isAuthenticated && (
                    <Button onClick={handleAddCert} className="btn-custom btn-primary-custom">
                      <FontAwesomeIcon icon={faPlus} className="me-2" />
                      Add Your First Certification
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row>
            {certifications.map((cert) => (
              <Col lg={6} md={6} key={cert.id} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{cert.name}</h6>
                        <p className="text-muted small mb-1">Issued by: {cert.issuer}</p>
                        <p className="text-muted small mb-1">Date: {cert.date}</p>
                        {cert.expiry && <p className="text-muted small mb-1">Expires: {cert.expiry}</p>}
                        {cert.credentialId && <p className="text-muted small mb-0">ID: {cert.credentialId}</p>}
                      </div>
                      {isAuthenticated && (
                        <div className="d-flex flex-column">
                          <Button 
                            variant="outline-warning" 
                            size="sm" 
                            className="mb-1"
                            onClick={() => handleEditCert(cert)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                          <Button 
                            variant="outline-danger" 
                            size="sm"
                            onClick={() => handleDeleteCert(cert.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* Languages Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3>Languages</h3>
              {isAuthenticated && (
                <Button onClick={handleAddLang} className="btn-custom btn-primary-custom" size="sm">
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Add Language
                </Button>
              )}
            </div>
          </Col>
        </Row>

        <Row>
          {languages.map((lang) => (
            <Col lg={6} md={6} key={lang.id} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{lang.name}</h6>
                      <p className="text-muted small mb-1">Proficiency: {lang.proficiency}</p>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="small">Level: {lang.level}%</span>
                      </div>
                      <ProgressBar 
                        now={lang.level} 
                        variant={getProgressVariant(lang.level)}
                        style={{ height: '8px', borderRadius: '4px' }}
                      />
                    </div>
                    {isAuthenticated && (
                      <div className="d-flex flex-column">
                        <Button 
                          variant="outline-warning" 
                          size="sm" 
                          className="mb-1"
                          onClick={() => handleEditLang(lang)}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => handleDeleteLang(lang.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional Competencies */}
        <Row className="mt-5">
          <Col lg={12}>
            <Card className="border-0 shadow">
              <Card.Body className="p-4">
                <h4 className="text-center mb-4">Additional Competencies</h4>
                <Row>
                  <Col md={6}>
                    <h6 className="mb-3">Tools & Technologies</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <FontAwesomeIcon icon={faServer} className="me-2 text-primary" />
                        SIEM Tools (Splunk, QRadar, ELK Stack)
                      </li>
                      <li className="mb-2">
                        <FontAwesomeIcon icon={faDatabase} className="me-2 text-primary" />
                        Database Security (MySQL, PostgreSQL, MongoDB)
                      </li>
                      <li className="mb-2">
                        <FontAwesomeIcon icon={faCloud} className="me-2 text-primary" />
                        Cloud Security Platforms
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCode} className="me-2 text-primary" />
                        Security Automation & Orchestration
                      </li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h6 className="mb-3">Professional Skills</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <FontAwesomeIcon icon={faShieldAlt} className="me-2 text-primary" />
                        Incident Response & Forensics
                      </li>
                      <li className="mb-2">
                        <FontAwesomeIcon icon={faNetworkWired} className="me-2 text-primary" />
                        Network Architecture Design
                      </li>
                      <li className="mb-2">
                        <FontAwesomeIcon icon={faLock} className="me-2 text-primary" />
                        Security Policy Development
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faTools} className="me-2 text-primary" />
                        Threat Intelligence & Analysis
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Authentication Modal */}
        <Modal show={showAuthModal} onHide={() => setShowAuthModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Admin Authentication Required</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleAuth}>
            <Modal.Body>
              <p>Please enter the admin password to modify content:</p>
              <Form.Group>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </Form.Group>
              {authError && <p className="text-danger mt-2">{authError}</p>}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowAuthModal(false)}>
                Cancel
              </Button>
              <Button type="submit" className="btn-primary-custom">
                Authenticate
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>

        {/* Skill Modal */}
        <Modal show={showSkillModal} onHide={() => setShowSkillModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{editingSkill ? 'Edit Skill' : 'Add New Skill'}</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSkillSubmit}>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select 
                  value={skillFormData.category} 
                  onChange={(e) => setSkillFormData({...skillFormData, category: e.target.value})}
                  required
                >
                  <option value="">Select Category</option>
                  {skillCategories.map((cat, index) => (
                    <option key={index} value={cat.title}>{cat.title}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Skill Name</Form.Label>
                <Form.Control 
                  type="text" 
                  value={skillFormData.skillName} 
                  onChange={(e) => setSkillFormData({...skillFormData, skillName: e.target.value})}
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Proficiency Level: {skillFormData.level}%</Form.Label>
                <Form.Range 
                  min="0" 
                  max="100" 
                  value={skillFormData.level} 
                  onChange={(e) => setSkillFormData({...skillFormData, level: e.target.value})}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowSkillModal(false)}>Cancel</Button>
              <Button type="submit" className="btn-primary-custom">{editingSkill ? 'Update Skill' : 'Add Skill'}</Button>
            </Modal.Footer>
          </Form>
        </Modal>

        {/* Certification Modal */}
        <Modal show={showCertModal} onHide={() => setShowCertModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{editingCert ? 'Edit Certification' : 'Add New Certification'}</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleCertSubmit}>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Certification Name</Form.Label>
                <Form.Control 
                  type="text" 
                  value={certFormData.name} 
                  onChange={(e) => setCertFormData({...certFormData, name: e.target.value})}
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Issuing Organization</Form.Label>
                <Form.Control 
                  type="text" 
                  value={certFormData.issuer} 
                  onChange={(e) => setCertFormData({...certFormData, issuer: e.target.value})}
                  required 
                />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Issue Date</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={certFormData.date} 
                      onChange={(e) => setCertFormData({...certFormData, date: e.target.value})}
                      placeholder="2024"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={certFormData.expiry} 
                      onChange={(e) => setCertFormData({...certFormData, expiry: e.target.value})}
                      placeholder="2027"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Credential ID</Form.Label>
                <Form.Control 
                  type="text" 
                  value={certFormData.credentialId} 
                  onChange={(e) => setCertFormData({...certFormData, credentialId: e.target.value})}
                  placeholder="Optional"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowCertModal(false)}>Cancel</Button>
              <Button type="submit" className="btn-primary-custom">{editingCert ? 'Update Certification' : 'Add Certification'}</Button>
            </Modal.Footer>
          </Form>
        </Modal>

        {/* Language Modal */}
        <Modal show={showLangModal} onHide={() => setShowLangModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{editingLang ? 'Edit Language' : 'Add New Language'}</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleLangSubmit}>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Language Name</Form.Label>
                <Form.Control 
                  type="text" 
                  value={langFormData.name} 
                  onChange={(e) => setLangFormData({...langFormData, name: e.target.value})}
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Proficiency Level</Form.Label>
                <Form.Select 
                  value={langFormData.proficiency} 
                  onChange={(e) => setLangFormData({...langFormData, proficiency: e.target.value})}
                  required
                >
                  <option value="">Select Proficiency</option>
                  <option value="Native">Native</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Professional">Professional</option>
                  <option value="Conversational">Conversational</option>
                  <option value="Basic">Basic</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Proficiency Level: {langFormData.level}%</Form.Label>
                <Form.Range 
                  min="0" 
                  max="100" 
                  value={langFormData.level} 
                  onChange={(e) => setLangFormData({...langFormData, level: e.target.value})}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowLangModal(false)}>Cancel</Button>
              <Button type="submit" className="btn-primary-custom">{editingLang ? 'Update Language' : 'Add Language'}</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    </div>
  );
};

export default Skills; 