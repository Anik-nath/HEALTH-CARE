import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Care from '../Care/Care';

const BestCare = () => {
    const [ourServices, setOurServices] = useState([]);

    useEffect(() => {
      fetch("/services.json")
        .then((res) => res.json())
        .then((data) => setOurServices(data));
    }, []);
    return (
        <div className="py-5" style={{backgroundColor:"#f1f1f1"}}>
            <div className="text-center">
                <h2 className="mb-5">Our <span className="text-info">Best</span> Care</h2>
            </div>
         <Container>
              <Row xs={1} md={2} className="g-4 mb-4">
              {ourServices.slice(0,4).map((service) => (
              <Care key={service.id} service={service}></Care>
              ))}
              </Row>
         </Container>
         <div className="py-3 text-center">
            <Link to="/service">
            <button className="btn btn-info OurBtn text-white">ALL Cares</button>
            </Link>
         </div>
        
      </div>
    );
};

export default BestCare;