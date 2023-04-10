import React, {useState} from "react";
function Intro() {

    const [getNama, setNama] = useState("");
    const [getKuliah, setKuliah] = useState("");

    const gantiNama = () => {
        setNama("Dede Kurniawan");
    }
    const getmyKuliah = () => {
        setKuliah("Universitas Subang");
    }
    

  return (
    <div>
      <h2>Nama saya : {getNama}</h2>
    <div>
      <button onClick={() => gantiNama()}>Submit</button>
    </div>
      <h2>Kuliah di : {getKuliah}</h2>
    <div>
      <button onClick={() => getmyKuliah()}>Submit</button>
    </div>
    </div>
  );
}

export default Intro;
