import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarPenyebab.PNG";

const Penyebab =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Penyebab Efek Rumah Kaca</h1>
                <img src={Gambar1} alt="EfekRumahKaca"/>
                <h2>Penggudunlan Hutan</h2>
                <p>Hutan memiliki peranan penting bagi kehidupan manusia di bumi. Tumbuhan dan pohon-pohon mampu menyerap gas karbon dioksida yang ada di udara dan melepaskan oksigen melalui proses fotosintensis. Akibatnya, hutan bermanfaat untuk menyediakan udara yang bersih. Satu pohon dewasa dapat menyediakan kebutuhan oksigen bagi sekitar 2-10 orang per hari. Selain menghasilkan udara yang segar, hutan juga berfungsi sebagai katalis untuk “mendinginkan bumi” akibat pemanasan global</p>
                <h2>Penggunaan Bahan Bakar Fosil</h2>
                <p>Bahan bakar fosil merupakan salah satu sumber energi dari dalam bumi dan terbentuk dari sisa-sisa binatang dan tumbuhan. Bahan bakar fosil sampai saat ini masih banyak digunakan untuk memenuhi kebutuhan sehari-hari. Bahan bakar fosil antara lain batu bara, gas alam, dan minyak bumi. Penggunaan bahan bakar fosil dalam jumlah besar akan sangat berdampak pada kualitas udara. Selain itu, bahan bakar fosil dapat meningkatkan konsentrasi gas rumah kaca pada atmosfer.</p>
                <h2>Penggunaan Pupuk Kimia</h2>
                <p>Pupuk anorganik yang secara terus menerus dapat memberikan dampak negatif. Kandungan Nitrous Oksida yang dilepaskan ke udara akan menghasilkan efek rumah kaca.</p>
                <h2>Pencemaran Polusi Laut</h2>
                <p>Limbah Industri yang tidak diolah dengan baik dan dibuang begitu saja ke laut akan menyebabkan pencemaran laut. Akibatnya, ekosistem di laut yang berfungsi untuk menyerap CO2 tidak akan maksimal. Salah satu ekosistem yang hidup di laut dan memiliki peran penting dalam penyerapan CO2 dan menghasilkan 70% O2 adalah Fitoplankton.</p>
                <h2>Limbah Peternakan</h2>
                <p>Limbah hasil peternakan seperti kotoran sapi, menghasilkan gas rumah kaca. Kandungan gas yang dihasilkan adalah CO2 dan CH4 (metana). Limbah peternakan harus diolah dengan baik, karena jika tidak diolah dengan baik dan dibiarkan secara terus-menerus akan menimbulkan dampak efek rumah kaca yang dihasilka</p>
                <h2>Limah Rumah Tangga</h2>
                <p>Limbah hasil dari kegiatan rumah tangga yang berasal dari kamar mandi, dapur, cucian limbah industri rumah tangga dan juga kotoran manusia. Limbah rumah tangga apabila tidak bisa diolah dengan baik akan berdampak buruk pada lingkungan. Karena Gas metana dan CO2 yang berasal dari bakteri-bakteri pengurai sampah lambat laun akan semakin banyak jika dibiarkan menumpuk</p>
                <h2>Sampah Plastik</h2>
                <p>Sampah plastik yang menumpuk di berbagai tempat di belahan dunia ini akan mengeluarkan gas metana dan etilen ketika terkena paparan sinar matahari dan merusak. Kandungan gas metana menempati posisi kedua faktor perusak lingkungan. Metana merupakan salah satu gas rumah kaca yang bisa menangkap panas dalam atmosfer dan kemudian dipancarkan selama kegiatan produksi batu bara, gas alam serta minyak bumi.</p>
                <h2>Pengunaan Tisu yang Berlebihan</h2>
                <p>Seringkali kita tidak menyadari bahwa penggunaan tisu yang berlebihan pada kegiatan sehari-hari. Padahal tisu yang kita gunakan diproduksi dari serat kayu pohon. Semakin banyak tisu yang digunakan maka semakin banyak pohon yang akan ditebang untuk pembuatan tisu.</p>

            </div>
        </div>
    )
}

export default Penyebab