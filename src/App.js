import React from 'react';
import { Contador } from './componentes/Contador';
import { ContadorConReducer } from './componentes/ContadorConReducer';
import { ContadorMejorado } from './componentes/ContadorMejorado';

export const App = () => {
  return (
    <div>
      <h1>UserReducer</h1>
      <hr />
      <ContadorMejorado />
    </div>
  );
};
