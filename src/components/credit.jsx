import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./styles/credit.css";

const Credit = () => {
  return (
    <div className="container credit">
      <div className="">
        Made by <span className="bold">Ujjwal Puri</span>
      </div>
      <div className="social-media">
        <a href="https://github.com/ujjwalpuri29" target="_blank">
          <BsGithub />
        </a>
        <a href="https://linkedin.com/in/ujjwal-puri" target="_blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Credit;
