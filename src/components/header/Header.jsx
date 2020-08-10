import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header className="jumbotron bg-primary">
      <h1 className="display-5 titulo">Juego de Números</h1>

      <hr className="my-4"></hr>
      <p className="text-right titulo">
        Podés adivinar el número antes de que se termine la paciencia?
      </p>
    </header>
  );
}

export default Header;
