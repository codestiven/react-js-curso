import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  // Obtén los parámetros de la URL
  const query = new URLSearchParams(useLocation().search);
  const cos = query.get("cos");

  // Hacer algo con el valor de 'cos', como mostrarlo en un alert


  return (
    <div>
      <p>{cos}</p>
    </div>
  );
};

export default Contact;
