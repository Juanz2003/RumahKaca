import React from "react";
import "../ComponentStyle/Background.css";
import bumi from "../Asset/bumi.png";

const Background =()=> {
    return(
        <div className="Background">
            <img src={bumi} />
        </div>
    )
}

export default Background