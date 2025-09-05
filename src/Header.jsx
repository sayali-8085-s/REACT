import React from "react";
import img  from "./assets/dog.webp"

import { FaHome } from "react-icons/fa";

function Header(){
    
    return(
        <>
        <FaHome />
        <h1 style={{'color':'red'}}>header</h1>
        <img src={img} alt="dog" />
        </>
    )
}
export default Header