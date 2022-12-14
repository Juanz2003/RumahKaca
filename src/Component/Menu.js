import React from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import Musik from "../Asset/musik.png";
import Rumah from "../Asset/Home.png";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Ui from "./UI";

const Menu =({mute})=> {
    return(
        <div className="MenuContainer">
            <div className="ContainerList" >
                <h1>Menu</h1>
                <Link to="/Materi">
                    <button>Materi</button>
                </Link>
                <Link to="/Video">
                    <button>Video</button>
                </Link>
                <Link to="/Quiz">
                    <button>Quiz</button>
                </Link>
            </div>
            <div className="ContainerTools">
                <Ui mutes={mute} />
                <div className="Arrow" >
                    <Link to="/Materi">
                    <img src={arrowR}  />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Menu