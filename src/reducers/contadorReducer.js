import { types } from '../actions/contadorActions';
export const contadorInitialState = {
  contador: 0
};

export const funcionInicializadora = (contadorInitialState) => {
  return {
    contador: contadorInitialState.contador + 10
  };
};

export function reductora(state, action) {
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
      return { contador: contadorInitialState.contador };
    default:
      return state;
  }
}
