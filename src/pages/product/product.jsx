import React from "react";
import { useNavigate , useLocation } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const redirectToCoas = () => {
    // Redirigir a la ruta /coas
    navigate("/");

  };

  return (
    <div>
      <h1>Componente de Ejemplo Sencillo</h1>
      <p>Este es un texto de ejemplo para nuestro componente sencillo.</p>

      {/* Utiliza una función para redirigir a /coas sin Link */}
      <button onClick={redirectToCoas}>Click para ir a coas</button>
    </div>
  );
};

export default Product;
