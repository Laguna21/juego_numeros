import React from "react";
import "./style.css";
import Formulario from "../formulario/Formulario";

function GeneradorNumero(props) {
  return (
    <div className="text-center">
      {props.listo ? (
        <Formulario
          numeroSecreto={props.numeroSecreto}
          setListo={props.setListo}
        />
      ) : (
        <div>
          <h1 className="display-5 titulo">ESTAS LISTO?</h1>
          <button
            onClick={props.iniciar}
            className="btn btn-primary btn-lg m-3"
          >
            INICIAR!
          </button>
        </div>
      )}
    </div>
  );
}

export default GeneradorNumero;
