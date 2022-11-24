import React, { useState } from 'react';

export const Contador = () => {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  return (
    <div className="d-flex flex-column text-center">
      <h2>Contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button className="btn btn-primary mx-2" onClick={sumar}>
          +
        </button>
        <button className="btn btn-danger mx-2" onClick={restar}>
          -
        </button>
      </nav>
    </div>
  );
};
