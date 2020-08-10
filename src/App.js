import React from "react";

import "./App.css";
import "./tools/bootstrap.min.css";
import Header from "./components/header/Header";
import GeneradorNumero from "./components/generadorNumero/GeneradorNumero";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [listo, setListo] = useState(false);
  const [numeroSecreto, setNumeroSecreto] = useState(0);
  const iniciar = () => {
    setListo(true);
    const numero = Math.floor(Math.random() * 999);
    setNumeroSecreto(numero);
  };

  return (
    <div className="App">
      <Header />
      {/* SACAR LOS COMENTARIOS DE ESTA SECCION PARA SABER CUAL ES EL NUMERO SECRETO!
      o se puede ver por consola
       <h3>{numeroSecreto}</h3> */}
      {console.log(`Numero secreto....  ${numeroSecreto}`)}
      <GeneradorNumero
        iniciar={iniciar}
        listo={listo}
        setListo={setListo}
        setNumeroSecreto={setNumeroSecreto}
        numeroSecreto={numeroSecreto}
      />
      <Footer />
    </div>
  );
}

export default App;
