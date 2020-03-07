import React, { useState, Fragment } from 'react';
import matrizAxios from '../../../config/axios';
import Swal from 'sweetalert2';

const FormMatriz = ({ onAddMatriz }) => {
  const [matriz, saveMatriz] = useState({
    matriz_name: '',
  });
  const { matriz_name } = matriz;

  const handleChange = (e) => {
    saveMatriz({ ...matriz, [e.target.name]: e.target.value });
  };
  const addMatriz = (e) => {
    e.preventDefault();
    matrizAxios.post('/registro/matriz', matriz).then((res) => {
      Swal.fire('Nueva Matriz', res.data.mensaje, 'success');
      onAddMatriz();
    });
  };

  return (
    <Fragment>
      <div className="col">
        <div className="card my-card shadow-sm">
          <div className="card-title form-group">
            <form className="ml-auto" onSubmit={addMatriz}>
              <legend className="p-0">Agregar nueva matriz:</legend>
              <div className="campo">
                <label className="m-0">Nombre:</label>
                <input
                  className="campo"
                  type="text"
                  placeholder="Matriz"
                  name="matriz_name"
                  value={matriz_name}
                  onChange={handleChange}
                  autoFocus
                />
              </div>
              <div className="campo btn-block">
                <input
                  type="submit"
                  value="Agregar"
                  className="btn btn-success btn-block input-matriz"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FormMatriz;
