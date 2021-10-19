import React from "react";
import "./NotFound.css";
import notFound from "../../../src/images/banner/notFound.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="text-center">
      <div className="notfound mb-0 ">
        <img src={notFound} alt="" />
        <Link to="/home">
          <button className="btn btn-info text-white OurBtn">Go To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
