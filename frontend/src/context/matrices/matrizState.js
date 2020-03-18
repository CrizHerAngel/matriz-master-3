import React, { useReducer } from 'react';
import matrizContext from './matrizContext.js';
import matrizReducer from './matrizReducer';
import matrizAxios from '../../config/axios';

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
  const initialState = {
    matrices: [],
    errormatriz: false,
    matrizseleccionada: null,
  };

  /* Create dispatch and state */
  const [state, dispatch] = useReducer(matrizReducer, initialState);

  //Obtener archivos Matriz
  const getMatrices = async () => {
    try {
      const resultado = await matrizAxios.get('/registro/matriz');
      dispatch({
        type: GET_MATRICES,
        payload: resultado.data.matrices,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Agregar una matriz
  const addMatriz = async (matriz) => {
    try {
      const resultado = await matrizAxios.post('/registro/matriz', matriz);
      console.log(resultado);
      dispatch({
        type: ADD_MATRIZ,
        payload: resultado.data.matriz,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Valida y muestra un error
  const validateMatriz = () => {
    dispatch({
      type: VALIDATE_FORM_MATRIZ,
    });
  };

  //Eliminar Matriz x ID
  const deleteMatriz = async (id_matrix) => {
    try {
      await matrizAxios.delete(`/registro/matriz/${id_matrix}`);

      dispatch({
        type: DELETE_MATRIZ,
        payload: id_matrix,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Edita u modifica una matriz
  const updateMatriz = async (matriz) => {
    try {
      const resultado = await matrizAxios.put(
        `/registro/matriz/${matriz.id_matrix}`,
        matriz
      );
      console.log(resultado);
      dispatch({
        type: UPDATE_MATRIZ,
        payload: matriz,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Extrae una matriz para editar
  const saveMatrizActual = (matriz) => {
    dispatch({
      type: MATRIZ_ACTUAL,
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
