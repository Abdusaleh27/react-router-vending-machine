import React from "react";
import "./VendingMachine.css";
import { Link } from "react-router-dom";
const VendingMachine = ({ setSelected }) => {
  setSelected("/");
  return (
    <div className="vmachine">
      <p>Choose an item: </p>
      <div className="nav-item">
        <Link to="/candy" className="link">
          Candy
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/lobster" className="link">
          Lobster
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/yogurt" className="link">
          Yogurt
        </Link>
      </div>
    </div>
  );
};

export default VendingMachine;
