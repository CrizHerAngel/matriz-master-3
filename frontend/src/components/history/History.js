import React, { Fragment } from 'react';

function History() {
  return (
    <Fragment>
      <h1 className="display-4">Historial</h1>
      <hr />
      <div className="row">
        <div className="col-lg-4">
          <div className="card shadow-sm mb-2">
            <div className="card-title mt-2 mx-2 mb-0">
              <h4>
                <b>Ordenar cambios por:</b>
              </h4>
              <hr />
              <div className="container m-0">
                <form className="form-group m-0">
                  <div className="form-check mx-auto mt-0 ">
                    <input className="form-check-input mt-2" type="checkbox" />
                    <label className="form-check-label ml-2">Fecha</label>
                  </div>
                  <div className="form-check mx-auto mt-0">
                    <input className="form-check-input mt-2" type="checkbox" />
                    <label className="form-check-label ml-2">Usuario</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card my-card shadow-sm mb-2">
            <div className="card-title mt-2 mx-2 mb-1">
              <div className="input-group justify-content-between">
                <h4 className="d-inline m-2">
                  <b>Cambios generales</b>
                </h4>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Buscar cambio..."
                />
              </div>
            </div>
            <table
              className="table table-bordered table-sm table-hover mb-0"
              id="tableHistory"
            >
              <thead className="thead-systems">
                <tr className="text-center">
                  <th scope="col">Fecha</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Cambio</th>
                  <th scope="col">Hora</th>
                </tr>
              </thead>
              <tbody id="tableHistoryBody" />
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default History;
