import React from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import Musik from "../Asset/musik.png";
import Rumah from "../Asset/Home.png";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";

const Menu =()=> {
    return(
        <div className="MenuContainer">
            <div className="ContainerList" >
                <h1>Menu</h1>
                <Link to="/Materi">
                    <button>Materi</button>
                </Link>
                <Link to="/">
                    <button>Video</button>
                </Link>
                <Link to="/">
                    <button>Quiz</button>
                </Link>
            </div>
            <div className="ContainerTools">
                <div className="UI" >
                    <img src={Musik}  />
                    <img src={Rumah}  />
                </div>
                <div className="Arrow" >
                    <img src={arrowL}  />
                    <img src={arrowR}  />
                </div>
            </div>
        </div>

    )
}

export default Menu