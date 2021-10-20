import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div id="about" style={{height:"100vh"}}>
     <Container>
     <div className="text-center py-4">
        <h2> About <span className="text-info">Medi-Care</span></h2>
      </div>
      <p>
        What is the healthcare service? Health services consist of medical
        professionals, organizations, and ancillary health care workers who
        provide medical care to those in need. Health services serve patients,
        families, communities, and populations. ... These services are centered
        around making health care accessible, high quality, and
        patient-centered. 
      </p>
      <h4 className="text-info">More details is coming soon...</h4>
     </Container>
    </div>
  );
};

export default About;
