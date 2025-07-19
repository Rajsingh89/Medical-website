import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      <Navbar />
      
      <Element name="home">
        <Hero />
      </Element>
      
      <Element name="about">
        <About />
      </Element>
      
      <Element name="services">
        <Services />
      </Element>
      
      <Element name="departments">
        <Departments />
      </Element>
      
      <Element name="doctors">
        <Doctors />
      </Element>
      
      <Element name="appointment">
        <Appointment />
      </Element>
      
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;