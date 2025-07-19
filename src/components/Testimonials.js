import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    { 
      name: "John Smith", 
      role: "Patient", 
      quote: "The care I received was exceptional. The doctors were very professional.", 
      img: "https://randomuser.me/api/portraits/men/32.jpg" 
    },
    { 
      name: "Sarah Williams", 
      role: "Patient", 
      quote: "The facilities are modern and the staff is very friendly.", 
      img: "https://randomuser.me/api/portraits/women/44.jpg" 
    }
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold">TESTIMONIALS</h6>
          <h2 className="display-5 fw-bold">What Our Patients Say</h2>
          <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
            Hear from our patients about their experiences
          </p>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Carousel indicators={false}>
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <div className="bg-white rounded p-4 p-md-5 text-center mx-2">
                    <div 
                      className="rounded-circle mx-auto mb-4" 
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundImage: `url(${testimonial.img})`,
                        backgroundSize: 'cover'
                      }}
                    ></div>
                    <FaQuoteLeft className="text-primary fs-1 mb-3" />
                    <p className="fs-5 mb-4">{testimonial.quote}</p>
                    <h5 className="fw-bold mb-1">{testimonial.name}</h5>
                    <p className="text-muted">{testimonial.role}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
