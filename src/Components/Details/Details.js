import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { serviceId } = useParams();
  const [ourServices, setOurServices] = useState([]);
  const [got, setGot] = useState([]);

  useEffect(() => {
    fetch("/singleServices.json")
      .then((res) => res.json())
      .then((data) => setOurServices(data));
  }, []);
  // console.log(ourServices)

  useEffect(() => {
    const gotYou = ourServices.find(
      (singleService) => singleService.id === +serviceId
    );
    setGot(gotYou);
  }, [ourServices]);

  // console.log(got);

  return (
    <>
      <div className="text-center" style={{ height: "100vh" }}>
        <div id="details">
          <h3>Care Id: {serviceId}</h3>
          <h3>{got?.name} </h3>
          <img src={got?.img} alt="" />
          <div className="mx-auto desc">
            <p>{got?.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
