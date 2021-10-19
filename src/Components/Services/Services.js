import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Care from "../Care/Care";

const Services = () => {
  const [ourServices, setOurServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setOurServices(data));
  }, []);

  return (
    <div>
      <div className="">
        <img className="w-100 mb-5" src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" />
      </div>
      {
        ourServices.length === 0 ? 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        : 
       <Container>
            <Row xs={1} md={2} className="g-3 mb-5">
            {ourServices.map((service) => (
            <Care key={service.id} service={service}></Care>
            ))}
            </Row>
       </Container>
      }
    </div>
  );
};

export default Services;
