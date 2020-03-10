import React, { Fragment, useContext } from 'react';
import matrizContext from '../../../context/matrices/matrizContext';

const Matriz = ({ matriz }) => {
  /* { matrix } */
  /* const { id_matrix, matriz_name } = matrix; */
  const matrizsContext = useContext(matrizContext);
  const { deleteMatriz, saveMatrizActual, getMatrices } = matrizsContext;

  //Funcion que se ejecuta cuando el usuario presion al el btn de eliminar
  const matrizDelete = (id) => {
    deleteMatriz(id);
    getMatrices();
  };

  //Extrae una matriz actual cuando el usuario desea editarla
  const seleccionarMatriz = (matriz) => {
    saveMatrizActual(matriz);
  };

  return (
    <Fragment>
      <tr className="text-center">
        {/*   <td>{matriz.id_matrix}</td> */}
        <td>{matriz.matriz_name}</td>
        <td>
          <button
            className="btn btn-info"
            onClick={() => seleccionarMatriz(matriz)}
          >
            <i className="fas fa-edit w-100 fa-lg" />
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => matrizDelete(matriz.id)}
          >
            <i className="fas fa-trash w-100 fa-lg" />
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default Matriz;
