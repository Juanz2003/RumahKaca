import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Ui from "./UI";

const Quiz =({mute})=> {

   

    return(
        <div className="MenuContainer">
            <div className="ContainerMateri" >
                <h1>Quizz</h1>
                <p>klik tombol "Mulai" untuk mengerjakan quiz</p>
                <a href="https://forms.gle/yryWnFfb5wHUifSy7" target="_blank">

                <button>Mulai</button>
                </a>
                                
            </div>
            <div className="ContainerTools">
                <Ui mutes={mute}/>
                <div className="Arrow" >
                    <Link to="/Video">
                    <img src={arrowL}  />
                    </Link>
                    <Link to="">
                        
                    <img src={arrowR}  />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Quiz;