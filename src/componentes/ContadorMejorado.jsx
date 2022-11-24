import React, { useReducer } from 'react';
import {
  reductora,
  contadorInitialState,
  funcionInicializadora
} from '../reducers/contadorReducer';

export const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(
    reductora,
    contadorInitialState,
    funcionInicializadora
  );

  const sumar = () => {
    dispatch({
      type: 'INCREMENT'
    });
  };
  const sumar5 = () => {
    dispatch({
      type: 'INCREMENTBY5',
      payload: 5
    });
  };
  const restar = () => {
    dispatch({
      type: 'DECREMENT'
    });
  };
  const restar5 = () => {
    dispatch({
      type: 'DECREMENTBY5',
      payload: 5
    });
  };
  const reset = () => {
    dispatch({
      type: 'RESET'
    });
  };
  return (
    <div className="d-flex flex-column text-center">
      <h2>Contador mejorado con Reducer</h2>
      <h3>{state.contador}</h3>
      <nav>
        <button className="btn btn-primary mx-2" onClick={sumar}>
          +
        </button>
        <button className="btn btn-primary mx-2" onClick={sumar5}>
          +5
        </button>
        <button className="btn btn-warning mx-2" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-danger mx-2" onClick={restar}>
          -
        </button>
        <button className="btn btn-danger mx-2" onClick={restar5}>
          -5
        </button>
      </nav>
    </div>
  );
};
