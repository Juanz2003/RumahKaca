import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Ui from "./UI";

const Video =({mute})=> {

 

    return(
        <div className="MenuContainer">
            <div className="ContainerMateri" >
                <h1>Video</h1>
                <iframe allowFullScreen width="400" height="320" src="https://www.youtube.com/embed/FI3fKuB4WLc" tittle='Video'>

                </iframe>
                 
            </div>
            <div className="ContainerTools">
                <Ui mutes={mute} />
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

export default Video;