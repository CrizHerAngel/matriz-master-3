import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
/* import uuid from 'uuid'; */
import matrizContext from './matrizContext';
import matrizReducer from './matrizReducer';

import {
  GET_MATRICES,
  ADD_MATRIZ,
  VALIDATE_FORM_MATRIZ,
  DELETE_MATRIZ,
  MATRIZ_ACTUAL,
  UPDATE_MATRIZ,
  RESET_MATRIZ,
} from '../../types';

const MatrizState = (props) => {
  const matrices = [
    { id: 1, matriz_name: 'LBU' },
    { id: 2, matriz_name: 'VITRO' },
    { id: 3, matriz_name: 'CCI' },
    { id: 4, matriz_name: 'ALFA' },
  ];
  const initialState = {
    matrices: [],
    errormatriz: false,
    matrizseleccionada: null,
  };

  /* Create dispatch and state */
  const [state, dispatch] = useReducer(matrizReducer, initialState);

  //Obtener archivos Matriz
  const getMatrices = () => {
    dispatch({
      type: GET_MATRICES,
      payload: matrices,
    });
  };

  //Agregar una matriz
  const addMatriz = (matriz) => {
    matriz.id = uuidv4();
    dispatch({
      type: ADD_MATRIZ,
      payload: matriz,
    });
  };

  //Valida y muestra un error
  const validateMatriz = () => {
    dispatch({
      type: VALIDATE_FORM_MATRIZ,
    });
  };

  //Eliminar Matriz x ID
  const deleteMatriz = (id) => {
    dispatch({
      type: DELETE_MATRIZ,
      payload: id,
    });
  };

  //Extrae una matriz para editar
  const saveMatrizActual = (matriz) => {
    dispatch({
      type: MATRIZ_ACTUAL,
      payload: matriz,
    });
  };

  //Edita u modifica una matriz
  const updateMatriz = (matriz) => {
    dispatch({
      type: UPDATE_MATRIZ,
      payload: matriz,
    });
  };

  //Reset... limpiar despues de editar elimina la matrizseleccionada
  const resetMatriz = () => {
    dispatch({
      type: RESET_MATRIZ,
    });
  };

  return (
    <matrizContext.Provider
      value={{
        matrices: state.matrices,
        errormatriz: state.errormatriz,
        matrizseleccionada: state.matrizseleccionada,
        getMatrices,
        addMatriz,
        validateMatriz,
        deleteMatriz,
        saveMatrizActual,
        updateMatriz,
        resetMatriz,
      }}
    >
      {props.children}
    </matrizContext.Provider>
  );
};

export default MatrizState;
