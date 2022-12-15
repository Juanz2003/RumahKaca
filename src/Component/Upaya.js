import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarUpaya.PNG";

const Upaya =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Upaya Mengurangi Dampak Efek Rumah Kaca</h1>
                <img src={Gambar1} alt="EfekRumahKaca"/>
                <h2>Melakukan reboisasi hutan atau menanam pohon di sekitar lingkungan rumah</h2>
                <h2>Mengolah limbah hasil kegiatan rumah tangga</h2>
                <h2>Menggunakan pupuk organik dalam proses industri pertanian</h2>
                <h2>Memanfaatkan sampah plastik dengan melakukan kreasi sampah menjadi berbagai</h2>
            </div>
        </div>
    )
}

export default Upaya