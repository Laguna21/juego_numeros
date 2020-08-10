import React, { useState } from "react";
import "./style.css";

function Formulario(props) {
  const [ayuda, setAyuda] = useState("Vos Podés!");
  const [listaNumeros, setLista] = useState([]);

  const buscar = () => {
    const num = parseInt(document.getElementById("numero").value);
    let info;
    let gano = false;
    console.log(num);
    if (num > -1) {
      setLista([...listaNumeros, num]);
      if (num === props.numeroSecreto) {
        gano = true;
        info = "GANASTE!";
      } else {
        info = num > props.numeroSecreto ? "ES MENOR!" : "ES MAYOR!";
      }

      ganar(info, gano);
    }
  };
  const ganar = (info, gano) => {
    setAyuda(info);

    if (gano) {
      document.getElementById("formulario").classList.remove("bg-danger");
      document.getElementById("formulario").classList.add("bg-success");
      document.getElementById("buscar").classList.add("esconder");
      document.getElementById("reiniciar").classList.remove("esconder");
    } else {
      document.getElementById("formulario").classList.add("bg-danger");
    }
  };
  const reiniciar = () => {
    props.setListo(false);
  };

  return (
    <div className=" d-flex justify-content-center">
      <div className="card border-primary mb-3" id="formulario">
        <h1 className="display-5">{ayuda}</h1>
        <div className="form-group">
          <label className="control-label" htmlFor="numero">
            Adiviná el número!
          </label>
          <input
            className="form-control"
            id="numero"
            type="text"
            placeholder="999"
          ></input>
          <button onClick={buscar} className="btn btn-info m-3" id="buscar">
            INTENTÁ!
          </button>
          <p>NÚMEROS SELECCIONADOS:</p>
          <div className="row">
            {listaNumeros.map((n, i) => {
              return (
                <h5 key={i} className="col">
                  {n}
                </h5>
              );
            })}
          </div>
          <button
            onClick={reiniciar}
            className="btn btn-warning m-3 esconder"
            id="reiniciar"
          >
            REINICIAR?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
