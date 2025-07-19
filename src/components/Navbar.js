import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-2">
        <Container>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="me-4 d-flex align-items-center">
                <FaPhone className="me-2" /> +1 234 567 890
              </div>
              <div className="d-flex align-items-center">
                <FaEnvelope className="me-2" /> info@medicio.com
              </div>
            </div>
            <div className="d-none d-md-flex">
              <a href="#" className="text-white mx-2"><FaFacebookF /></a>
              <a href="#" className="text-white mx-2"><FaTwitter /></a>
              <a href="#" className="text-white mx-2"><FaInstagram /></a>
              <a href="#" className="text-white mx-2"><FaLinkedinIn /></a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar expand="lg" className={scrolled ? "bg-white shadow-sm py-2" : "py-3"}>
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3 text-primary">
            MediCio<span className="text-success">.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item className="mx-2">
                <Link to="home" spy={true} smooth={true} className="nav-link fw-medium text-dark cursor-pointer">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Link to="about" spy={true} smooth={true} className="nav-link fw-medium text-dark cursor-pointer">
                  About
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Link to="services" spy={true} smooth={true} className="nav-link fw-medium text-dark cursor-pointer">
                  Services
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Link to="departments" spy={true} smooth={true} className="nav-link fw-medium text-dark cursor-pointer">
                  Departments
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Link to="doctors" spy={true} smooth={true} className="nav-link fw-medium text-dark cursor-pointer">
                  Doctors
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Link to="appointment" className="btn btn-outline-primary rounded-pill px-4">
                  Appointment
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}