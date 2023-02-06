import React from "react";
import {
  MdChecklist,
  MdRecycling,
  MdSpeed,
  MdWater,
  MdWaterDrop,
} from "react-icons/md";
import { RiTempHotLine } from "react-icons/ri";

import "./styles/features.css";

const Features = () => {
  return (
    <div className="features-container container">
      <div className="subheading light-green">Features</div>
      <div className="card-container">
        <div className="features-card">
          <MdChecklist className="icon" />
          <div>
            <span className="bold light-green">Govt. Approved</span>
            <br /> in TUV Rhineland,
            <br /> Germany
          </div>
        </div>
        <div className="features-card">
          <MdRecycling className="icon" />
          <div>
            <span className="bold light-green">100% recyclable</span>
            <br />
            and
            <br />
            <span className="bold light-green">non-toxic</span>
          </div>
        </div>
        <div className="features-card">
          <MdWaterDrop className="icon" />
          <div className="bold light-green">Leak-Proof</div>
        </div>
        <div className="features-card">
          <RiTempHotLine className="icon" />
          <div>
            <span className="bold light-green">Odorless, Tasteless</span>
            <br />
            and doesn't react
            <br />
            with hot beverages
          </div>
        </div>
        <div className="features-card">
          <MdSpeed className="icon" />
          <div className="bold light-green">Lightweight</div>
        </div>
        <div className="features-card">
          <MdWater className="icon" />
          <div className="bold light-green">Microwavable</div>
        </div>
      </div>
    </div>
  );
};

export default Features;
