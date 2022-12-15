import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Ui from "./UI";

const Animasi =({mute})=> {

   

    return(
        <div className="MenuContainer">
            <div className="ContainerMateri" >
                <h1>Animasi</h1>
                <iframe allowFullScreen width="400" height="320" src="https://www.youtube.com/embed/dUvpGxkFoYM" tittle='Video'>

                </iframe>
                                
            </div>
            <div className="ContainerTools">
                <Ui mutes={mute} />
                <div className="Arrow" >
                    <Link to="/Video">
                    <img src={arrowL}  />
                    </Link>
                    <Link to="/Quiz">
                        
                    <img src={arrowR}  />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Animasi;