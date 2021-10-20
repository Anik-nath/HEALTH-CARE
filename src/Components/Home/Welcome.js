import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import doctor1 from "../../../src/images/doctors/doctor-1.png";

const Welcome = () => {
  return (
    <div className="pt-5">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="w-75">
              <img className="w-100" src={doctor1} alt="welcome doctor" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="mt-5">
              <h2 className="mb-4">
                Welcome To <br /> <span className="text-info">Medi-Care</span>
              </h2>
              <p className="text-justify lead">
              Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.
              </p>
              <Link to="/about">
                <button className="btn btn-info text-white OurBtn mb-5 lg:mb-0 md:mb-0">About Us</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
