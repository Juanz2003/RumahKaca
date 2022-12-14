import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import Musik from "../Asset/musik.png";
import Rumah from "../Asset/Home.png";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Pengertian from "./Pengertian";

const Materi =()=> {

    const [openPengertian, setOpenPengertian] = useState (false)

    return(
        <div className="MenuContainer">
            <div className="ContainerMateri" >
                <h1>Materi Efek Rumah Kaca</h1>
                <Link to="">
                    <button onClick={()=> setOpenPengertian(true)}>Pengertian</button>
                </Link>
                <Link to="/">
                    <button>Penyebab</button>
                </Link>
                <Link to="/">
                    <button>Dampak</button>
                </Link>
                <Link to="/">
                    <button>Upaya</button>
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

            <Pengertian open={openPengertian} onClose={()=>setOpenPengertian(false)} />
        </div>

    )
}

export default Materi;