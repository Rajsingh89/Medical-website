import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold">CONTACT</h6>
          <h2 className="display-4 fw-bold">Get In Touch</h2>
          <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
            We're here to answer your questions and provide support
          </p>
        </div>
        
        <Row className="g-4">
          <Col lg={5}>
            <div className="bg-light rounded p-4 h-100">
              <div className="d-flex mb-4">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h5 className="fw-bold">Location</h5>
                  <p className="text-muted mb-0">123 Medical Drive, Health City, HC 12345</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h5 className="fw-bold">Email</h5>
                  <p className="text-muted mb-0">info@medicio.com</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                  <FaPhone size={20} />
                </div>
                <div>
                  <h5 className="fw-bold">Call</h5>
                  <p className="text-muted mb-0">+1 234 567 890</p>
                </div>
              </div>
              
              <div className="d-flex">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                  <FaClock size={20} />
                </div>
                <div>
                  <h5 className="fw-bold">Working Hours</h5>
                  <p className="text-muted mb-0">Mon-Fri: 9AM - 5PM</p>
                  <p className="text-muted mb-0">Sat: 10AM - 2PM</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={7}>
            <div className="bg-white rounded shadow p-4 h-100">
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" className="py-3" />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" className="py-3" />
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Control type="text" placeholder="Subject" className="py-3" />
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Control as="textarea" rows={5} placeholder="Message" className="py-3" />
                </Col>
                <Col md={12} className="text-center">
                  <Button variant="primary" className="rounded-pill px-4 py-3 fw-bold">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          
          {/* Google Map */}
          <Col md={12} className="mt-4">
            <div className="rounded overflow-hidden shadow-sm" style={{ height: '400px' }}>
              <iframe 
                title="MediCio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.332217150659!2d77.22724981508223!3d28.62829908241968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy">
              </iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}