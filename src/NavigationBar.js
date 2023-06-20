import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css"
const NavigationBar = ({selected,setSelected}) => {
    return(
        <nav className="nav-bar">
            <Link className={`nav-comp ${selected==="/" ? "selected" :"" }`}  to="/"> Home </Link>
            <Link className={`nav-comp ${selected==="candy" ? "selected" :"" }`} to="/candy" > Candy </Link>
            <Link className={`nav-comp ${selected==="lobster" ? "selected" :"" }`} to="/lobster" > Lobster </Link>
            <Link className={`nav-comp ${selected==="yogurt" ? "selected" :"" }`} to="/yogurt"> Yogurt </Link>
        </nav>
    )
};

export default NavigationBar;