import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarPeng.PNG";

const Pengertian =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Pengertian Efek Rumah Kaca</h1>
                <img src={Gambar1} alt="EfekRumahKaca"/>
                <p>Efek rumah kaca adalah sebuah istilah yang dipakai ketika panas matahari terperangkap oleh panas bumi. Gas-gas di atmosfer yang berfungsi menahan panas matahari seperti gas CO2 . Suhu bumi semakin meningkat dari tahun ke tahun karena sebagian panas yang harusnya dipantulkan permukaan bumi ditangkap oleh gas rumah kaca (GRK) yang ada di atmosfer</p>

            </div>
        </div>
    )
}

export default Pengertian