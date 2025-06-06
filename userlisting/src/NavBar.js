import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav style={{backgroundColor:"rgb(17, 77, 166)", padding:"10px", gap:"20", height:30, fontSize:"large", textAlign:"left",}}>
            <Link to='/' style={{color:"white", marginRight:"15px", textDecoration:"None", fontWeight:"bold" }}>Home</Link>
            <Link to='/users' style={{color:"white", marginRight:"15px", textDecoration:"None", fontWeight:"bold" }}>Users</Link>
        </nav>
    )
}

export default NavBar;