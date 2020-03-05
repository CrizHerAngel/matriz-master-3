import React, { useEffect, useState, useContext, Fragment } from 'react';
//Importar User axios
import matrizAxios from '../../config/axios';
/** Importanciones de LINKS */
import { Link } from 'react-router-dom';
/* ************* Importando CONTEXT */
import { MATRIZContext } from '../../context/MATRIZContext';
//Importando componentes
import User from './User';

function Users() {
  //Trabajar con el state donde users = state, saveUsers para guardar el state
  const [users, saveUsers] = useState([]);
  /* *******Utilizar valores del context */
  const [auth, saveAuth] = useContext(MATRIZContext);
  /*  console.log(auth); */

  /************************************************************************** */
  //QUery a la API
  const consultarAPI = async () => {
    const userConsulta = await matrizAxios.get('/users');
    saveUsers(userConsulta.data);
    /*  .then((response) => {
        console.log(response);
        saveUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      }); */
  };
  //useEffect es similar a ComponetDiMount y willMount
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Fragment>
      {/* <h2 className="mb-5">Usuarios</h2> */}
      <h1 className="display-4">Usuarios</h1>
      <hr />
      <div className="col-lg">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Buscar usuario"
          />
        </div>
        <div className="card my-card shadow-sm mb-3">
          <div className="card-title mt-2 mx-2 mb-1">
            <h4 className="d-inline ">
              <b>Lista de usuarios</b>
            </h4>
            <div className="btn-group float-right">
              <Link to={'/users/new'} className="btn btn-sm btn-success">
                <i className="fas fa-user-plus fa-lg" />
                <b>Agregar</b>
              </Link>
            </div>
          </div>
          <table className="table table-sm table-hover mb-0">
            <thead className="thead-systems">
              <tr className="text-center">
                <th scope="col">Alias</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">WiW</th>
                <th scope="col">Rol</th>
                <th colSpan="2">Acción</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <User key={user.Id_user} user={user} onDelete={consultarAPI} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
export default Users;
