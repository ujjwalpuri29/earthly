import React from "react";
import "./styles/home.css";

const Homepage = () => {
  return (
    <div className="home-container container">
      <div className="subtitle">
        Take a step towards sustainability with our
      </div>
      <div className="heading">Sustainability Starter Kit</div>
      <div className="subtitle">
        only at <span className="price">€10.99</span>
      </div>
      <div className="btn-holder">
        <button className="primary">Buy Now</button>
        <button className="secondary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Homepage;
