import React from "react";
import ReactDOM from "react-dom";

function SayHi({ name }) {
  return (
    <>
      <h1>Hola {name}</h1>
    </>
  );
}

const aa = "Soy Lenny";

ReactDOM.render(
  <section>
    <SayHi name={aa} />
  </section>,
  document.getElementById("app")
);
