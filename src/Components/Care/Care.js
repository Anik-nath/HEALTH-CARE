import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Care.css";

const Care = (props) => {
  const { name, img ,desc,id} = props.service;

  return (
    <Col>
      <Card className="shadow Ourcard">
        <div className="image-container w-50">
          <Card.Img className="img ourImage" variant="top" src={img} />
        </div>
        <Card.Body className="w-50">
          <Card.Title>
            <h5 className="py-3">{name}</h5>
          </Card.Title>
          <p>{desc}</p>
          <Link to={`/details/${id}`}>
          <Button variant="btn btn-outline-primary mb-3 px-3">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Care;
