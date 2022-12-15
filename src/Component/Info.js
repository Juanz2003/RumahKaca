import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/Profil.jpg";

const Info =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Profil Pengembang</h1>
                <img src={Gambar1} alt="EfekRumahKaca"/>
                <p>Nama : Anjuan Ahmad Al Fahrizy</p>
                <p>NIM : 21105244034</p>
                <p>Prodi : Teknologi Pendidikan 2021 B</p>
                <h1>Credit</h1>
                <h2>Materi</h2>
                <p>https://lindungihutan.com/blog/efek-rumah-kaca/</p>
                <h2>Video</h2>
                <p>https://youtu.be/FI3fKuB4WLc</p>
                <p>https://youtu.be/dUvpGxkFoYM</p>
                <h2>Audio</h2>
                <p>https://youtu.be/6lqS34C4DCg</p>
                <h2>Gambar</h2>
                <p>https://www.shutterstock.com/id/search/efek-rumah-kaca</p>
            </div>
        </div>
    )
}

export default Info