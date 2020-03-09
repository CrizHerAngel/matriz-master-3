import React, { useReducer } from 'react';
import MatrizContext from './matrizContext';
import MatrizReducer from './matrizReducer';

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
    { id_matrix: 1, matriz_name: 'LBU' },
    { id_matrix: 2, matriz_name: 'VITRO' },
    { id_matrix: 3, matriz_name: 'CCI' },
    { id_matrix: 4, matriz_name: 'ALFA' },
    { id_matrix: 5, matriz_name: 'ALLA' },
    { id_matrix: 6, matriz_name: 'VETRO' },
    { id_matrix: 7, matriz_name: 'CHBB' },
    { id_matrix: 8, matriz_name: 'AUU' },
  ];
  const initialState = {
    matrices: [],
    errormatriz: false,
    matrizseleccionada: null,
  };

  /* Create dispatch and state */
  const [state, dispatch] = useReducer(MatrizReducer, initialState);

  //Obtener archivos Matriz
  const getMatrices = () => {
    dispatch({
      type: GET_MATRICES,
      payload: matrices,
    });
  };

  //Agregar una matriz
  const addMatriz = (matriz) => {
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
  const deleteMatriz = (id_matrix) => {
    dispatch({
      type: DELETE_MATRIZ,
      payload: id_matrix,
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
    <MatrizContext.Provider
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
    </MatrizContext.Provider>
  );
};

export default MatrizState;
