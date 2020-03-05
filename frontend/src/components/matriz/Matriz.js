import React, { Fragment } from 'react';

function Matriz() {
  return (
    <Fragment>
      <h1 className="display-4">Matriz de Escalación</h1>
      <hr />
      <div className="row">
        <div className="col-lg-3 hide">
          <div className="card shadow-sm">
            <div className="card-title mt-2 mx-2">
              <h5>Selección de filtros</h5>
              <div className="card-body">
                <form />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="mb-2">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Buscar responsable"
              />
            </div>
          </div>
          <div className="card my-card shadow-sm mb-3">
            <div className="card-title mt-3 mx-2 mb-0">
              <h4 className="d-inline">
                <b>Tabla responsables</b>
              </h4>
              <p className="d-inline float-right">
                <button
                  className="btn btn-outline-systems"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFilters"
                  aria-expanded="false"
                  aria-controls="collapseFilters"
                >
                  Mostrar filtros <i className="far fa-plus-square" />
                </button>
              </p>
            </div>
            <div className="collapse container" id="collapseFilters">
              <hr />
              <div className="row d-flex justify-content-around">
                <div className="col-4 col-lg-2">
                  <div className="form-group text-center">
                    <label className="font-weight-bold">Matriz</label>
                    <select
                      id="previewFilter1"
                      className="form-control form-control-lg"
                    >
                      <option data-id="*">Seleccionar...</option>
                    </select>
                  </div>
                </div>
                <div className="col-4 col-lg-2">
                  <div className="form-group text-center">
                    <label className="font-weight-bold">Cliente</label>
                    <select
                      id="previewFilter2"
                      className="form-control form-control-lg"
                    >
                      <option>Seleccionar...</option>
                    </select>
                  </div>
                </div>
                <div className="col-4 col-lg-2">
                  <div className="form-group text-center">
                    <label className="font-weight-bold">Service Line</label>
                    <select
                      id="previewFilter3"
                      className="form-control form-control-lg"
                    >
                      <option>Seleccionar...</option>
                    </select>
                  </div>
                </div>
                <div className="col-4 col-lg-2">
                  <div className="form-group text-center">
                    <label className="font-weight-bold">Área</label>
                    <select
                      id="previewFilter4"
                      className="form-control form-control-lg"
                    >
                      <option>Seleccionar...</option>
                    </select>
                  </div>
                </div>
                <div className="col-4 col-lg-2">
                  <div className="form-group text-center">
                    <label className="font-weight-bold">Cargo</label>
                    <select
                      id="previewFilter5"
                      className="form-control form-control-lg"
                    >
                      <option>Seleccionar...</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <table
              className="table table-sm table-hover mb-0"
              id="tablePreview"
            >
              <thead className="thead-systems">
                <tr className="text-center">
                  <th scope="col">Cargo</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">Ext.</th>
                  <th scope="col">Estatus</th>
                  <th scope="col">Más información</th>
                </tr>
              </thead>
              <tbody id="tableBodyPreview">
                {/* <td class="text-center table-dark" colspan="6"><b>Service Line</b></td> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Matriz;
