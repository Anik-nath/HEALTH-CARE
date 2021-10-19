import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact" style={{ height: "100vh" }}>
      <Container>
        <div className="text-center py-4">
          <h2>
            Contact <span className="text-info">Health-Care</span>
          </h2>
        </div>
        <Row xs={1} sm={1} md={2} lg={2} className="g-5">
          <Col>
            <Form className="border py-5 px-3 shadow">
              <h5 className="lead">Send your message</h5>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Username"
              />
              <Form.Control className="mb-3" type="email" placeholder="Email" />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control placeholder="Message" as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
