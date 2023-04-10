import { useState } from "react";
const Tentang = () => {
    const [getNama, setNama] = useState("");
    const [getKuliah, setKuliah] = useState("");
    const [getPacar, setPacar] = useState("");

    const gantiNama = () => {
        setNama("Dede Kurniawan");
    }
    const getmyKuliah = () => {
        setKuliah("Universitas Subang");
    }
    const getmyPacar = () => {
        setPacar("Hani Nuraini");
    }
    return(
        <>
        <div>
      <h2>Nama saya : {getNama}</h2>
    <div>
      <button onClick={() => gantiNama()}>Submit</button>
    </div>
      <h2>Kuliah di : {getKuliah}</h2>
    <div>
      <button onClick={() => getmyKuliah()}>Submit</button>
    </div>
      <h2>Pacarnya : {getPacar}</h2>
    <div>
      <button onClick={() => getmyPacar()}>Submit</button>
    </div>
    </div>
        </>
    )
}

export default Tentang;