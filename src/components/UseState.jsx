import React from "react";
import { useState } from "react"; 

/* aqui aprendi que se debe de colcoar () = > para que funcione la funcion hacercosas en vez de solo
colcoarlo porque o si no se ejecutara de una ves */

function UseState() {
  const [A, setA] = useState(0);
  const cambioscosas = () => {
    console.log("un chhhhhhhlick");
  };

  function cc(pp) {

    console.log(pp);
  }

  
  function aumentar() {
    setA(A + 1);
  }

  return (
    <>
       <input type="text" onChange={(e) => setA(e.target.value)}/>
      <button onClick={() => aumentar()}>un click</button>
      <h1> {A} </h1>
    </>
  );
}

export default UseState;
