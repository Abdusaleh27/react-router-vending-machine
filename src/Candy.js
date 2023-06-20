import React from "react";
import { Link } from "react-router-dom";

const Candy = ({setSelected}) => {
    setSelected("candy");
  return (
    <div>
      <div className="nav-item">
        <Link to="/" className="link" onClick={()=>setSelected("/")}>
          Go Back
        </Link>
      </div>
      <img
        src="https://media4.giphy.com/media/LqgrRiLbCwrCcopc79/giphy.gif?cid=ecf05e47ren9f9boqqwzxj54eg4pucwyhurxqwc1mck5z024&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="candy"
      />
    </div>
  );
};

export default Candy;
