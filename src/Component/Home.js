import React from "react";
import "../ComponentStyle/HomeStyle.css";
import Judul from "../Asset/Judul.png";
import Play from "../Asset/Play.png";
import { Link } from 'react-router-dom';

const Home =()=> {
    return(
     <div className="HomeContainer">
        <div className="TittleContainer">
            <img src={Judul} />
        </div>
        <div className="ButtonContainer">
            <Link to="/Menu">
             <img src={Play} />
            </Link>
        </div>
    </div>   
    )
}

export default Home;