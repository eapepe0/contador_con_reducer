import React, { useReducer } from 'react';

const initialState = {
  contador: 0
};

const funcionInicializadora = (initialState) => {
  return {
    contador: initialState.contador + 10
  };
};
const types = {
  INCREMENT: 'INCREMENT',
  INCREMENTBY5: 'INCREMENTBY5',
  DECREMENT: 'DECREMENT',
  DECREMENTBY5: 'DECREMENTBY5',
  RESET: 'RESET'
};

function reductora(state, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { contador: state.contador + 1 };
    case types.INCREMENTBY5:
      return { contador: state.contador + action.payload };
    case types.DECREMENT:
      return { contador: state.contador - 1 };
    case types.DECREMENTBY5:
      return { contador: state.contador - action.payload };
    case types.RESET:
      return { contador: initialState.contador };
    default:
      return state;
  }
}
export const ContadorConReducer = () => {
  const [state, dispatch] = useReducer(
    reductora,
    initialState,
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
      <h2>Contador con Reducer</h2>
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
