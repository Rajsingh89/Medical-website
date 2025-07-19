import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { FaHeartbeat, FaTeeth, FaBrain } from 'react-icons/fa';

export default function Departments() {
  const [key, setKey] = useState('cardiology');

  const departments = [
    {
      id: 'cardiology',
      title: 'Cardiology',
      icon: <FaHeartbeat size={20} />,
      desc: 'Heart health services including diagnostics and treatment',
      services: [
        { 
          title: 'Cardiac Diagnostics', 
          desc: 'Advanced heart health assessment', 
          img: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=500' 
        },
        { 
          title: 'Heart Surgery', 
          desc: 'Expert surgical interventions', 
          img: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=500' 
        }
      ]
    },
    {
      id: 'dental',
      title: 'Dental Care',
      icon: <FaTeeth size={20} />,
      desc: 'Comprehensive dental services for all ages',
      services: [
        { 
          title: 'Teeth Cleaning', 
          desc: 'Professional dental cleaning', 
          img: 'https://images.unsplash.com/photo-1580828343064-fde4fc206f6d?auto=format&fit=crop&w=500' 
        },
        { 
          title: 'Cosmetic Dentistry', 
          desc: 'Enhance your smile', 
          img: 'https://images.unsplash.com/photo-1564429099369-5cae3b9415da?auto=format&fit=crop&w=500' 
        }
      ]
    }
  ];

  return (
    <section id="departments" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold">OUR DEPARTMENTS</h6>
          <h2 className="display-5 fw-bold">Medical Departments</h2>
          <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
            Explore our specialized medical departments
          </p>
        </div>
        
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-4 justify-content-center">
          {departments.map(dept => (
            <Tab 
              key={dept.id} 
              eventKey={dept.id} 
              title={
                <span className="d-flex align-items-center">
                  <span className="me-2">{dept.icon}</span>
                  {dept.title}
                </span>
              }
            />
          ))}
        </Tabs>
        
        <Tab.Content>
          {departments.map(dept => (
            <Tab.Pane key={dept.id} eventKey={dept.id}>
              <Row>
                <Col lg={4} className="mb-4 mb-lg-0">
                  <div className="bg-light p-4 rounded h-100">
                    <h3 className="fw-bold mb-3">{dept.title}</h3>
                    <p className="mb-4">{dept.desc}</p>
                    <ul className="list-unstyled">
                      <li className="mb-2"> Advanced diagnostics</li>
                      <li className="mb-2"> Expert medical staff</li>
                      <li className="mb-2"> Modern treatment methods</li>
                    </ul>
                    <button className="btn btn-primary rounded-pill mt-3">
                      View All Services
                    </button>
                  </div>
                </Col>
                <Col lg={8}>
                  <Row>
                    {dept.services.map((service, idx) => (
                      <Col md={6} key={idx} className="mb-4">
                        <div className="bg-white rounded overflow-hidden shadow-sm h-100">
                          <div 
                            className="bg-light" 
                            style={{
                              height: '200px',
                              backgroundImage: `url(${service.img})`,
                              backgroundSize: 'cover'
                            }}
                          ></div>
                          <div className="p-4">
                            <h5 className="fw-bold mb-2">{service.title}</h5>
                            <p className="text-muted mb-3">{service.desc}</p>
                            <a href="#" className="text-primary fw-bold text-decoration-none">
                              Learn More →
                            </a>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Container>
    </section>
  );
}