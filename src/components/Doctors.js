import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Doctors() {
  const doctors = [
    { 
      name: "Dr. Sarah Johnson", 
      specialty: "Cardiologist", 
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500" 
    },
    { 
      name: "Dr. Michael Chen", 
      specialty: "Neurologist", 
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500" 
    },
    { 
      name: "Dr. Emma Wilson", 
      specialty: "Dermatologist", 
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500" 
    },
    { 
      name: "Dr. James Rodriguez", 
      specialty: "Orthopedic Surgeon", 
      img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=500" 
    }
  ];

  return (
    <section id="doctors" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold">OUR DOCTORS</h6>
          <h2 className="display-5 fw-bold">Qualified Doctors</h2>
          <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
            Meet our team of medical professionals
          </p>
        </div>
        
        <Row>
          {doctors.map((doctor, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <div className="bg-white rounded overflow-hidden shadow-sm text-center h-100">
                <div 
                  className="bg-light" 
                  style={{
                    height: '250px',
                    backgroundImage: `url(${doctor.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center'
                  }}
                ></div>
                <div className="p-4">
                  <h5 className="fw-bold mb-1">{doctor.name}</h5>
                  <p className="text-primary mb-3">{doctor.specialty}</p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="text-muted mx-2"><FaFacebookF /></a>
                    <a href="#" className="text-muted mx-2"><FaTwitter /></a>
                    <a href="#" className="text-muted mx-2"><FaLinkedinIn /></a>
                    <a href="#" className="text-muted mx-2"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}