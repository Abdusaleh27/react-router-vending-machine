import React from "react";
import { Link } from "react-router-dom";

const Yogurt = ({ setSelected }) => {
  setSelected("yogurt");
    return (
    <div>
      <div className="nav-item" >
        <Link to="/" className="link" onClick={() => setSelected("/")}>
          Go Back
        </Link>
      </div>
      <img
        src="https://media.tenor.com/hfkLAszAyxkAAAAd/cat-yoghurt.gif"
        alt="yogurt"
      />
    </div>
  );
};

export default Yogurt;
