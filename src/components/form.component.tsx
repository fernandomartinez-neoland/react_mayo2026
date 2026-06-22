import { useState } from "react";
import "./form.css";

interface hijo {
  nombramos: string;
  setterName: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form({ nombramos, setterName }: hijo) {

    const [hijo, setHijo]=useState("hijo")
  const random = Math.floor(Math.random() * 100);
  return (
    <>
      <div className="formulario">
        <p>{random}</p>
        <h1 className="titulo">Formulario</h1>
        <h2>el nombre del hijo es: {nombramos}</h2>

        <button
          onClick={() => {
            setterName(nombramos + "a");
          }}
        >
          Agregar A
        </button>


        <h2>{hijo}</h2>
        <button onClick={()=>{setHijo(hijo+"B")}}>AgregarB</button>
      </div>
    </>
  );
}
