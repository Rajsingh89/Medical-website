import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Appointment() {
  return (
    <section id="appointment" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold">APPOINTMENT</h6>
          <h2 className="display-5 fw-bold">Make An Appointment</h2>
          <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
            Schedule your visit with our specialists
          </p>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="bg-white rounded shadow p-4 p-md-5">
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Control type="email" placeholder="Your Email" />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Control type="tel" placeholder="Your Phone" />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Select>
                      <option>Select Department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                    </Form.Select>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Select>
                      <option>Select Doctor</option>
                      <option>Dr. Sarah Johnson</option>
                      <option>Dr. Michael Chen</option>
                    </Form.Select>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Control type="date" />
                  </Col>
                  <Col md={12} className="mb-3">
                    <Form.Control as="textarea" rows={3} placeholder="Message (Optional)" />
                  </Col>
                  <Col md={12} className="text-center">
                    <Button variant="primary" className="rounded-pill px-4 py-2 fw-bold">
                      Book Appointment
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}