import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId} =useParams();

    return (
        <div className="text-center" style={{height:"100vh"}}>
            <h2>Details : {serviceId}</h2>
        </div>
    );
};

export default Details;