import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-5 text-white" style={{backgroundColor:"#011530e6"}}>
      <Container>
        <Row>
          <Col xs={12} md={3} lg={3}>
            <h5 className="text-info">HEALTH-CARE</h5>
            <small className="text-muted">Health is wealth</small>
          </Col>
          <Col xs={12} md={5} lg={5}>
            <h5>Address</h5>
            <div className="d-flex flex-column">
              <small>Chittagong , Bangladesh</small>
              <small className="py-2">Official: healthcare@gmail.com</small>
              <small>Helpline : 01322810867 (Available : 09:00am to 7:00pm)</small>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <h5>Usefull link</h5>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col xs={12} md={12}>
            <small className="text-secondary">Copyright © 2021 - HEALTH-CARE</small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
