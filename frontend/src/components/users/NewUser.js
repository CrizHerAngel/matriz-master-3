import React, { Fragment, useState } from 'react';
import matrizAxios from '../../config/axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function NewUser({ history }) {
  //user = state, saveUsers = funcion para guardar state
  const [user, saveUsers] = useState({
    name: '',
    lastname: '',
    alias: '',
    wiw: '',
    role: '',
    password: '' /* Agrege manualmente */,
  });
  //Funcion para leer los datos del form
  const updateState = (e) => {
    //Almacenar lo que el usuario escribe en el state
    saveUsers({
      //obtener copia del state actual
      ...user,
      [e.target.name]: e.target.value,
    });
    /*  console.log(user); */
  };

  //Añade en la REST API un cliente nuevo
  const addUser = (e) => {
    e.preventDefault();
    //Enviar peticion a AXIOS
    matrizAxios.post('/users', user).then((res) => {
      if (res.data.code === 11000) {
        Swal.fire({
          type: 'error',
          title: 'Hubo un error',
          text: 'El usuario ya esta registrado',
        });
      } else {
        console.log(res.data);
        Swal.fire('¡Nuevo Usuario!', res.data.mensaje, 'success');
      }
      //Redireccionar
      history.push('/users');
    });
  };

  /* Validar Usuario */
  const validarUser = () => {
    //Aplicar destructuring
    const { name, lastname, alias, wiw, role, password } = user;
    //Revisar que las propiedas del state tenga contenido
    /* console.log(user); */
    let valido =
      !name.length ||
      !lastname.length ||
      !alias.length ||
      !wiw.length ||
      !role.length ||
      !password.length;
    //regresa un true o false
    return valido;
  };

  return (
    <Fragment>
      <h2>Nuevo Usuario</h2>
      <form className="m-0 mr-auto ml-auto" onSubmit={addUser}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Usuario"
            name="name"
            onChange={updateState}
            autoFocus
          />
        </div>

        <div className="campo">
          <label>Apellidos:</label>
          <input
            type="text"
            placeholder="Apellidos Usuario"
            name="lastname"
            onChange={updateState}
          />
        </div>

        <div className="campo">
          <label>Alias:</label>
          <input
            type="text"
            placeholder="Alias"
            name="alias"
            onChange={updateState}
          />
        </div>

        <div className="campo">
          <label>WiW:</label>
          <input
            type="text"
            placeholder="Who is Who"
            name="wiw"
            onChange={updateState}
          />
        </div>
        <div className="campo">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={updateState}
          />
        </div>

        <div className="form-group campo">
          <label htmlFor="inputState">Role</label>
          <select name="role" className="campo" onChange={updateState}>
            <option value>Seleccionar...</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Gestor">Gestor</option>
            <option value="Usuario">Usuario</option>
          </select>
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-outline-systems"
            value="Agregar Usuario"
            disabled={validarUser()}
          />
        </div>
      </form>
    </Fragment>
  );
}
//Hid order Component HOC, es una funcion que toma un componente y retorna uno nuevo
export default withRouter(NewUser);
