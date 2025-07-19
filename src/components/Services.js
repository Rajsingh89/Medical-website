import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeartbeat, FaTeeth, FaBrain, FaBone, FaEye, FaTooth } from 'react-icons/fa';

export default function Services() {
  const services = [
    { icon: <FaHeartbeat size={36} />, title: "Cardiology", description: "Heart health services" },
    { icon: <FaTeeth size={36} />, title: "Dental Care", description: "Comprehensive dental services" },
    { icon: <FaBrain size={36} />, title: "Neurology", description: "Brain and nervous system care" },
    { icon: <FaBone size={36} />, title: "Orthopedics", description: "Musculoskeletal treatment" },
    { icon: <FaEye size={36} />, title: "Ophthalmology", description: "Eye care services" },
    { icon: <FaTooth size={36} />, title: "Dermatology", description: "Skin care treatments" }
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold">OUR SERVICES</h6>
          <h2 className="display-4 fw-bold">High Quality Services</h2>
          <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
            We offer a wide range of medical services to meet all your healthcare needs
          </p>
        </div>
        
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="bg-white p-4 rounded shadow-sm text-center h-100 transition-all">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  {service.icon}
                </div>
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-muted mb-0">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}