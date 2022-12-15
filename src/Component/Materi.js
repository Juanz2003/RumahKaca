import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Pengertian from "./Pengertian";
import Penyebab from "./Penyebab";
import Dampak from "./Dampak";
import Upaya from "./Upaya";
import Ui from "./UI";
import HomeModal from "./homeModal";
import Home from "./Home";

const Materi =({mute})=> {

    const [openPengertian, setOpenPengertian] = useState (false)
    const [OpenPenyebab, setOpenPenyebab] = useState (false)
    const [OpenDampak, setOpenDampak] = useState (false)
    const [OpenUpaya, setOpenUpaya] = useState (false)

    return(
        <div className="MenuContainer">
            <div className="ContainerMateri" >
                <h1>Materi Efek Rumah Kaca</h1>
                    <button onClick={()=> setOpenPengertian(true)}>Pengertian</button>
                    <button onClick={()=> setOpenPenyebab(true)}>Penyebab</button>
                    <button onClick={()=> setOpenDampak(true)}>Dampak</button>
                    <button onClick={()=> setOpenUpaya(true)}>Upaya</button>
            </div>
            <div className="ContainerTools">
                <Ui mutes={mute} />
                <div className="Arrow" >
                    <Link to="/Menu">
                    <img src={arrowL}  />
                    </Link>
                    <Link to="/Video">
                    <img src={arrowR}  />
                    </Link>
                    
                </div>
            </div>
            <Pengertian open={openPengertian} onClose={()=>setOpenPengertian(false)} />
            <Penyebab open={OpenPenyebab} onClose={()=>setOpenPenyebab(false)} />
            <Dampak open={OpenDampak} onClose={()=>setOpenDampak(false)} />
            <Upaya open={OpenUpaya} onClose={()=>setOpenUpaya(false)} />
        </div>

    )
}

export default Materi;