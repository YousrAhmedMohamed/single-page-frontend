import React from "react";
import { FiMail } from "react-icons/fi";
import "./style.scss";


const iconSearch = {
  width: "24px",
  color: "#4f5864",
  position: "absolute",
  left: "7px",
  top: "8px",
  opacity: "0.5",
  height: "24px"
};

function DealsCard() {


  return (
    <div className="DealsContainer">
      <div className="email-body">
        <div className="deal-label">

          Get the best deals delivered direct to your inbox each day
        </div>
        <div className="email-Div">
          <FiMail style={iconSearch} />
          <input
            className="email-bar"
            name="query"
            type="text"
            placeholder="Enter email address" />
          <button className="subscribe">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
export default DealsCard;
