import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { serviceId } = useParams();
  const [ourServices, setOurServices] = useState([]);
  const [singlee,setSinglee] = useState({});

    useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setOurServices(data));
    }, []);
    // console.log(ourServices)

    useEffect(()=>{
      const gotYou  = ourServices.find(e => e.id === parseInt(serviceId))
      // console.log(gotYou);
      setSinglee(gotYou);
    },[singlee])


  return (
    <div className="text-center" style={{ height: "100vh" }}>
      <h2>Details : {serviceId}</h2>
    </div>
  );
};

export default Details;
