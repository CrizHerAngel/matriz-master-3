import React, { Fragment, useState, useEffect } from 'react';
import matrizAxios from '../../../config/axios';
/* import Swal from 'sweetalert2'; */
import Matriz from './Matriz';
import FormMatriz from './FormMatriz';

function MatrizList() {
  const [matriz, saveMatriz] = useState([]);
  /* *********************************************************************************** */
  const consultarAPI = async () => {
    const matrizConsulta = await matrizAxios.get('/registro/matriz');
    saveMatriz(matrizConsulta.data);
  };

  useEffect(() => {
    consultarAPI();
  }, []);
  /* **************************************************************************************** */
  return (
    <Fragment>
      <h1 className="display-4">Matriz</h1>
      <hr />
      <div className="row justify-content-between">
        <FormMatriz onAddMatriz={consultarAPI} />
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
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th colSpan="2">Acción</th>
                </tr>
              </thead>
              <tbody>
                {matriz.map((matrix) => (
                  <Matriz key={matrix.id_matrix} matrix={matrix} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MatrizList;
