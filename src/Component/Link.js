import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Ui from "./UI";

const Link =()=> {

 

    return(
        <div className="MenuContainer">
            <div className="ContainerMateri" >
                <p>Untuk lebih jelas dalam memperdalam materi ini</p>   
            </div>
            <div className="ContainerTools">
                <Ui />
                <div className="Arrow" >
                    <Link to="/Materi">
                    <img src={arrowL}  />
                    </Link>
                    <Link to="/Animasi">
                    <img src={arrowR}  />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Link;