import React, { Fragment, useContext, useEffect } from 'react';
/* import matrizAxios from '../../../config/axios'; */
import matrizContext from '../../../context/matrices/matrizContext';
import Matriz from './Matriz';

const MatrizList = () => {
  const matrizsContext = useContext(matrizContext);
  const { matrices, getMatrices } = matrizsContext;

  useEffect(() => {
    getMatrices();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="row justify-content-between">
        <div className="col">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Buscar Matriz"
            />
          </div>
          <div className="card my-card shadow-sm mb-3">
            <div className="card-title mt-2 mx-2 mb-1">
              <h4 className="d-inline ">
                <b>Lista de Archivos Matriz</b>
              </h4>
              <div className="btn-group float-right" />
            </div>
            <table className="table table-sm table-hover mb-0">
              <thead className="thead-systems">
                <tr className="text-center">
                  <th scope="col">Nombre</th>
                  <th colSpan="2">Acción</th>
                </tr>
              </thead>
              <tbody>
                {matrices.length === 0 ? (
                  <tr>
                    <td>No existen matrices</td>
                  </tr>
                ) : (
                  matrices.map((matriz) => (
                    <Matriz key={matriz.id_matrix} matriz={matriz} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MatrizList;
