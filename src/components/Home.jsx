import React from "react";
// importar imagen
import backg from "../assets/background-cover.jpg";
import { Products } from "./Products";

export const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white">
        <img src={backg} className="card-img" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-around">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS 

            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};
