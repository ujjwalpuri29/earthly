import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="container">
      <div>only</div>
      <span className="price-footer">€10.99</span>
      <div className="btn-holder">
        <button className="primary">Buy Now</button>
        <button className="secondary">Add to Cart</button>
      </div>
      <div className="container">
        <div>share on</div>
        <div className="share-icons">
          <BsFacebook />
          <BsInstagram />
          <BsWhatsapp />
          <BsTwitter />
          <BsPinterest />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
