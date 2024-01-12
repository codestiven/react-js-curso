// descargar las despendencias de axios npm i axios  


import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const Fetch = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    // .then((response) => response.json())
    // .then((data) => setPokemonData(data));


    // usando axios

    axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
      setPokemonData(response.data);
         
    })

     console.log();


  });

  return <div></div>;
};
