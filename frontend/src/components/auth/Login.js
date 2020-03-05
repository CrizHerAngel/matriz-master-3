import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import matrizAxios from '../../config/axios';
import { withRouter } from 'react-router-dom';

//cONTEXT
import { MATRIZContext } from '../../context/MATRIZContext';

function Login(props) {
  //Auth y Token
  const [auth, saveAuth] = useContext(MATRIZContext);

  //State con los datos del formulario
  const [credentials, saveCredentials] = useState({
    alias: '',
    password: '',
  });
  //Iniciar sesion en el server
  const iniciarSesion = async (e) => {
    e.preventDefault();
    //autenticar al user
    try {
      const respuesta = await matrizAxios.post('/login', credentials);
      //Extraer token y almacenarlo en LS
      const { token } = respuesta.data;
      localStorage.setItem('token', token);

      //Colocarlo en el State
      saveAuth({
        token,
        auth: true,
      });

      //ACCESANDO
      Swal.fire('Login Correcto', 'Haz iniciado Sesion', 'success');
      //redireccionar
      props.history.push('/');
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: error.response.data.mensaje,
      });
    }
  };

  //ALMACENAR LO QUE ESCRIBE EL USUARIO EN STATE
  const leerDatos = (e) => {
    saveCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="login">
      <h2>Iniciar Sesión</h2>
      <div className="contenedor-formulario">
        <form onSubmit={iniciarSesion}>
          <div className="campo">
            <label>Alias:</label>
            <input
              className=""
              type="text"
              name="alias"
              placeholder="Alias"
              required
              onChange={leerDatos}
            />
          </div>
          <div className="campo">
            <label>Password:</label>
            <input
              className=""
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={leerDatos}
            />
          </div>
          <input
            type="submit"
            value="Iniciar Sesión"
            className="btn btn-systems btn-block"
          />
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
