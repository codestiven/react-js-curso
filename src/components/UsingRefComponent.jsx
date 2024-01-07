import React, { useRef, useState } from "react";

function UsingRefComponent() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    alert(`Valor actual del input: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleButtonClick}>Mostrar Valor</button>
    </div>
  );
}

export default UsingRefComponent;
