import React, { useState, Fragment, useContext, useEffect } from 'react';
import matrizContext from '../../../context/matrices/matrizContext';
/* import matrizAxios from '../../../config/axios'; */

const FormMatriz = () => {
  const matrizsContext = useContext(matrizContext);
  const {
    matrizseleccionada,
    errormatriz,
    addMatriz,
    validateMatriz,
    updateMatriz,
    resetMatriz,
  } = matrizsContext;

  //useEffect que detecta la seleccion de una matriz
  useEffect(
    () => {
      if (matrizseleccionada !== null) {
        saveMatriz(matrizseleccionada);
      } else {
        saveMatriz({
          matriz_name: '',
        });
      }
    },
    [matrizseleccionada]
  );

  const [matriz, saveMatriz] = useState({
    matriz_name: '',
  });

  const { matriz_name } = matriz;

  const handleChange = (e) => {
    saveMatriz({ ...matriz, [e.target.name]: e.target.value });
  };

  //Evento del formulario
  const onSubmit = (e) => {
    e.preventDefault();
    //Validar
    if (matriz_name.trim() === '') {
      validateMatriz();
      return;
    }
    //Si va a editar o agregar nueva matriz
    if (matrizseleccionada === null) {
      //Agregar la nueva matriz en el state
      addMatriz(matriz);
    } else {
      //actualizando matriz existente
      updateMatriz(matriz);
      //Elimina la matriz seleccionada.. reset
      resetMatriz();
    }
    //Reiniciar el form
    saveMatriz({
      matriz_name: '',
    });
  };

  return (
    <Fragment>
      <div className="col">
        <div className="card my-card shadow-sm">
          <div className="card-title form-group">
            <form className="ml-auto" onSubmit={onSubmit}>
              <legend className="p-0">Matriz de Escalación</legend>
              <div className="campo m-0">
                <label className="m-0">Nombre:</label>
                <input
                  className="campo m-0"
                  type="text"
                  placeholder="Matriz"
                  name="matriz_name"
                  value={matriz_name}
                  onChange={handleChange}
                />
              </div>
              {errormatriz ? (
                <p className="mensaje error text-center text-danger alert alert-danger">
                  El campo nombre es obligatorio
                </p>
              ) : null}

              <div className="campo btn-block mt-2">
                <input
                  type="submit"
                  value={
                    matrizseleccionada ? 'Editar Matriz' : 'Agregar Matriz'
                  }
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
