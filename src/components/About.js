import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStethoscope, FaUserMd, FaHeartbeat, FaProcedures } from 'react-icons/fa';

export default function About() {
  const features = [
    { icon: <FaStethoscope size={24} />, title: "Modern Equipment", desc: "Latest medical technology" },
    { icon: <FaUserMd size={24} />, title: "Qualified Doctors", desc: "Experienced professionals" },
    { icon: <FaHeartbeat size={24} />, title: "Emergency Care", desc: "24/7 emergency services" },
    { icon: <FaProcedures size={24} />, title: "Patient Care", desc: "Personalized care plans" }
  ];

  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <div className="rounded overflow-hidden" 
                   style={{
                     height: '400px',
                     backgroundImage: 'url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500)',
                     backgroundSize: 'cover'
                   }}>
              </div>
              <div className="position-absolute bottom-n5 end-n5 d-none d-lg-block" 
                   style={{
                     width: '300px',
                     height: '300px',
                     backgroundImage: 'url(https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=500)',
                     backgroundSize: 'cover',
                     borderRadius: '0.5rem'
                   }}>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <h6 className="text-primary fw-bold">ABOUT US</h6>
            <h2 className="display-5 fw-bold mb-4">We Provide Best Healthcare</h2>
            <p className="lead mb-4">
              MediCio is a leading healthcare provider with over 15 years of experience.
            </p>
            
            <Row>
              {features.map((item, index) => (
                <Col md={6} key={index} className="mb-4">
                  <div className="bg-white p-4 rounded shadow-sm h-100">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-3" 
                         style={{ width: '60px', height: '60px' }}>
                      {item.icon}
                    </div>
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}