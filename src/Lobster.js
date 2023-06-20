import React from "react";
import { Link } from "react-router-dom";

const Lobster = ({setSelected}) => {
    setSelected("lobster");
    return (
    <div>
      <div className="nav-item">
        <Link to="/" className="link" onClick={()=>setSelected("/")}>
          Go Back
        </Link>
      </div>
      <img
        src="https://media0.giphy.com/media/LQ34eIy7G0pTxKAfMv/giphy.gif?cid=ecf05e47uczf555b7hsa9u8g9wyqovak1syr4in2aorf2vt8&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="lobster"
      />
    </div>
  );
};

export default Lobster;
