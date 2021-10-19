import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="py-5 text-white" style={{backgroundColor:"#011530e6"}}>
      <Container>
        <Row>
          <Col xs={6} md={2}>
            <h5>HEALTH-CARE</h5>
          </Col>
          <Col xs={6} md={3}>
            <h6>Services</h6>
          </Col>
          <Col xs={6} md={3}>
            <h6>Usefull link</h6>
          </Col>
          <Col xs={6} md={3}>
            <h6>Latest News</h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={12}>
            <small className="text-secondary">Copyright © 2021 - anik nath</small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
