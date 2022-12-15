import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarDampak.PNG";

const Dampak =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Dampak Efek Rumah Kaca</h1>
                <img src={Gambar1} alt="EfekRumahKaca"/>
                <h2>Pemanasan Global</h2>
                <p>Pemanasan global (global warming) adalah proses peningkatan suhu rata-rata atmosfer, laut dan daratan bumi. Karena fenomena pemanasan kumulatif ini mengakibatkan suhu Bumi semakin hangat dan panas setiap tahunnya. Dampak efek rumah kaca yang paling berbahaya yaitu pemanasan global. Fenomena ini dipicu paling besar oleh kegiatan manusia, terutama berkaitan erat dengan penggunaan bahan bakar fosil dan pengalihan fungsi lahan. Gas metana dan CO2 yang berasal dari bakteri-bakteri pengurai sampah semakin banyak jika dibiarkan menumpuk.</p>
                <h2>Perubahan Iklim yang Drastis</h2>
                <p>Beberapa tempat yang biasanya cenderung hangat akan menjadi lembab karena jumlah air yang menguap di lautan semakin meningkat . Uap air yang banyak akan membentuk awan dengan jumlah lebih banyak. Kelembaban yang sangat tinggi dapat meningkatkan curah hujan, badai yang kering, dan air dalam tanah akan lebih cepat menguap.</p>
                <h2>Virus dan Bakteri Berevolusi</h2>
                <p>Perubahan cuaca yang drastis termasuk menjadi dampak efek rumah kaca yang timbul, perubahan cuaca tersebut dapat mengakibatkan munculnya penyakit yang berhubungan erat dengan panas. Beberapa penyakit yang penyebarannya melalui air dan bahkan mengakibatkan kematian.</p>
                <h2>Meningkatnya Permukaan Air laut</h2>
                <p>Semakin meningkatnya suhu bumi akibat dari pemanasan global, maka permukaan laut setiap tahunnya akan meningkat. Perubahan ini disebabkan oleh pemanasan global yang erat kaitannya dengan efek rumah kaca, yang mencairkan lapisan es di kutub</p>

            </div>
        </div>
    )
}

export default Dampak