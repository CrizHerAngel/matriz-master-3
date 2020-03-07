import React, { Fragment } from 'react';

const Matriz = ({ matrix }) => {
  const { id_matrix, matriz_name } = matrix;
  return (
    <Fragment>
      <tr className="text-center">
        <td>{id_matrix}</td>
        <td>{matriz_name}</td>
        <td>
          <button className="btn btn-info">
            <i className="fas fa-edit w-100 fa-lg" />
          </button>
        </td>
        <td>
          <button className="btn btn-danger">
            <i className="fas fa-trash w-100 fa-lg" />
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default Matriz;
