import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit, faExternalLinkAlt, faLaptopCode, faBook } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '', description: '', technologies: '', category: '', image: '', link: '', github: ''
  });

  const handleAddProject = () => {
    setEditingProject(null);
    setFormData({ title: '', description: '', technologies: '', category: '', image: '', link: '', github: '' });
    setShowModal(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(', '),
      category: project.category,
      image: project.image,
      link: project.link,
      github: project.github
    });
    setShowModal(true);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== projectId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: editingProject ? editingProject.id : Date.now(),
      title: formData.title,
      description: formData.description,
      technologies: formData.technologies.split(',').map(tech => tech.trim()),
      category: formData.category,
      image: formData.image,
      link: formData.link,
      github: formData.github
    };

    if (editingProject) {
      setProjects(projects.map(project => project.id === editingProject.id ? newProject : project));
    } else {
      setProjects([...projects, newProject]);
    }
    setShowModal(false);
  };

  return (
    <div className="section" id="projects">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Projects & Learning</h2>
            <p className="section-subtitle">Showcasing my learning journey and hands-on practice in network security</p>
            <Button onClick={handleAddProject} className="btn-custom btn-primary-custom mb-4">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add Learning Project
            </Button>
          </Col>
        </Row>

        {projects.length === 0 ? (
          <Row>
            <Col lg={12}>
              <Card className="text-center py-5 border-0 shadow">
                <Card.Body>
                  <FontAwesomeIcon icon={faLaptopCode} className="text-muted mb-4" style={{ fontSize: '4rem' }} />
                  <h3 className="text-muted mb-3">No Projects Yet</h3>
                  <p className="text-muted mb-4">
                    I'm currently focused on learning and building my skills in network security. 
                    As I complete hands-on projects and learning exercises, they will appear here.
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="d-flex align-items-center p-3 bg-light rounded">
                            <FontAwesomeIcon icon={faBook} className="text-primary me-3" />
                            <div className="text-start">
                              <h6 className="mb-1">Learning Projects</h6>
                              <small className="text-muted">Hands-on exercises and labs</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="d-flex align-items-center p-3 bg-light rounded">
                            <FontAwesomeIcon icon={faLaptopCode} className="text-primary me-3" />
                            <div className="text-start">
                              <h6 className="mb-1">Security Tools</h6>
                              <small className="text-muted">Practice with various tools</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button onClick={handleAddProject} className="btn-custom btn-primary-custom mt-3">
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Add Your First Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row>
            {projects.map((project) => (
              <Col lg={4} md={6} key={project.id} className="mb-4">
                <Card className="project-card h-100">
                  <Card.Img variant="top" src={project.image} alt={project.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-2">
                      <Badge bg="primary" className="me-2">{project.category}</Badge>
                    </div>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                    <div className="mb-3">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} bg="light" text="dark" className="me-1 mb-1">{tech}</Badge>
                      ))}
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Button variant="outline-primary" size="sm" className="me-2" href={project.link} target="_blank">
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="me-1" />
                          Live Demo
                        </Button>
                        <Button variant="outline-secondary" size="sm" href={project.github} target="_blank">
                          Code
                        </Button>
                      </div>
                      <div>
                        <Button variant="outline-warning" size="sm" className="me-2" onClick={() => handleEditProject(project)}>
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button variant="outline-danger" size="sm" onClick={() => handleDeleteProject(project.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{editingProject ? 'Edit Project' : 'Add New Learning Project'}</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control type="text" name="title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select name="category" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} required>
                      <option value="">Select Category</option>
                      <option value="Learning Project">Learning Project</option>
                      <option value="Security Lab">Security Lab</option>
                      <option value="Tool Practice">Tool Practice</option>
                      <option value="Network Analysis">Network Analysis</option>
                      <option value="Security Research">Security Research</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Technologies/Tools Used (comma-separated)</Form.Label>
                <Form.Control type="text" name="technologies" value={formData.technologies} onChange={(e) => setFormData({...formData, technologies: e.target.value})} placeholder="e.g., Wireshark, Python, VirtualBox" required />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
              <Button type="submit" className="btn-primary-custom">{editingProject ? 'Update Project' : 'Add Project'}</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    </div>
  );
};

export default Projects; 