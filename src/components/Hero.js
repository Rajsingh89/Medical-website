import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// FIX: Add FaHeartbeat to the imports
import { FaPlay, FaCalendarAlt, FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="position-relative min-vh-100 d-flex align-items-center" 
      style={{ 
        background: 'linear-gradient(135deg, #1a73e8 0%, #34a853 100%)',
        overflow: 'hidden'
      }}>
      
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" 
           style={{ 
             backgroundImage: 'url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000)',
             backgroundSize: 'cover'
           }}>
      </div>
      
      <Container className="position-relative py-5">
        <Row className="align-items-center">
          <Col lg={6} className="text-white py-5">
            <h1 className="display-4 fw-bold mb-4">Your Health is Our Priority</h1>
            <p className="lead mb-5">
              We provide the best healthcare services with modern technology and 
              experienced doctors to ensure your well-being.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="appointment" spy={true} smooth={true}>
                <Button variant="light" className="rounded-pill px-4 py-3 fw-bold">
                  <FaCalendarAlt className="me-2" /> Book Appointment
                </Button>
              </Link>
              <Button variant="outline-light" className="rounded-pill px-4 py-3 fw-bold">
                <FaPlay className="me-2" /> Watch Video
              </Button>
            </div>
          </Col>
          
          <Col lg={6} className="d-none d-lg-block position-relative">
            {/* Circle Background */}
            <div className="position-absolute top-50 start-50 translate-middle" 
                 style={{
                   width: '500px',
                   height: '500px',
                   borderRadius: '50%',
                   background: 'rgba(255,255,255,0.2)'
                 }}>
            </div>
            
            {/* Doctor Image */}
            <div className="position-relative" style={{ zIndex: 1 }}>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500" 
                alt="Doctor"
                className="img-fluid rounded-circle shadow-lg"
                style={{ border: '10px solid rgba(255,255,255,0.2)' }}
              />
            </div>
            
            {/* Floating Elements */}
            <div className="position-absolute" style={{ top: '20%', right: '10%', zIndex: 2 }}>
              <div className="bg-white rounded-circle p-3 shadow">
                <div className="bg-primary rounded-circle p-2">
                  {/* FIX: Use imported FaHeartbeat */}
                  <FaHeartbeat className="text-white fs-3" />
                </div>
              </div>
            </div>
            
            <div className="position-absolute" style={{ bottom: '20%', left: '10%', zIndex: 2 }}>
              <div className="bg-white rounded-circle p-3 shadow">
                <div className="bg-success rounded-circle p-2">
                  <FaCalendarAlt className="text-white fs-3" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}