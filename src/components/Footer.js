import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-5">
      <Container>
        <Row>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">MediCio</h5>
            <p className="mb-3">
              A leading healthcare provider committed to delivering exceptional medical services.
            </p>
            <div className="d-flex">
              <a href="#" className="text-white me-3"><FaFacebookF /></a>
              <a href="#" className="text-white me-3"><FaTwitter /></a>
              <a href="#" className="text-white me-3"><FaInstagram /></a>
              <a href="#" className="text-white"><FaLinkedinIn /></a>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">Useful Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">About us</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy policy</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Cardiology</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Neurology</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Dental Care</a></li>
              <li><a href="#" className="text-white text-decoration-none">Ophthalmology</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="mb-3">
              Subscribe to our newsletter for health tips and updates.
            </p>
            <div className="d-flex">
              <input type="email" className="form-control rounded-start-pill" placeholder="Your Email" />
              <button className="btn btn-light rounded-end-pill px-3">
                Subscribe
              </button>
            </div>
          </Col>
        </Row>
        
        <div className="border-top border-white border-opacity-10 pt-4 mt-4 text-center">
          <p className="mb-0">
            &copy; Copyright <strong>MediCio</strong>. All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}