import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact">
      <Container>
        <div className="text-center py-4">
          <h2>
            Contact <span className="text-info">Health-Care</span>
          </h2>
        </div>
        <Row xs={12} sm={12} md={12} lg={12} className="g-5">
          <Col className="pb-5">
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
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
