import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { serviceId } = useParams();
  const [ourServices, setOurServices] = useState([]);

    useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setOurServices(data));
    }, []);


  const result = ourServices.find((e) => e.id === 2)
  // console.log(result);



  return (
    <div className="text-center" style={{ height: "100vh" }}>
      <h2>Details : {serviceId}</h2>
    </div>
  );
};

export default Details;
