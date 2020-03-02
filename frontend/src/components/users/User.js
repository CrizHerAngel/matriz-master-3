import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import matrizAxios from '../../config/axios';

function User({ user, onDelete }) {
  //Extraerlos valores
  const { Id_user, name, lastname, alias, wiw, role } = user;
  //Eliminar Users
  const deleteUser = (Id_user) => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Un usuario eliminado no se puede recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        /* lLAMADO A AXIOS */
        matrizAxios.delete(`/users/${Id_user}`).then((res) => {
          Swal.fire('¡Eliminado!', res.data.mensaje, 'success');
          onDelete();
          //redireccionar
        });
      }
    });
  };

  return (
    <Fragment>
      <tr className="text-center">
        <td>{alias}</td>
        <td>{name}</td>
        <td>{lastname}</td>
        <td>{wiw}</td>
        <td>{role}</td>
        <td>
          <Link to={`/users/edit/${Id_user}`} className="btn btn-info">
            <i className="fas fa-edit w-100 fa-lg
          " />
          </Link>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deleteUser(Id_user)}
          >
            <i className="fas fa-trash w-100 fa-lg " />
          </button>
        </td>
      </tr>
    </Fragment>
  );
}
export default User;
