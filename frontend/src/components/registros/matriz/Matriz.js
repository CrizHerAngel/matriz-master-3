import React, { Fragment } from 'react';

function Matriz() {
  return (
    <Fragment>
      <div className="col">
        <div className="card my-card shadow-sm">
          <div className="card-title">
            <form className="m-0">
              <legend className="m-0">Agregar nueva matriz:</legend>
              <div className="campo ml-3">
                <label className="ml-2">Nombre:</label>
                <input
                  className="campo"
                  type="text"
                  placeholder="Matriz"
                  name="matriz_name"
                  /* onChange={updateState} */
                  autoFocus
                />
              </div>
              <div className="campo ml-3">
                <input
                  type="submit"
                  value="Agregar"
                  className="btn btn-success btn-block input-matriz ml-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Matriz;
