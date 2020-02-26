import React, { Fragment, useState, useEffect } from 'react';
import matrizAxios from '../../config/axios';
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom';



function EditUser(props) {

    //obtener ID
    const { id } = props.match.params;

/*     console.log(id); */

    //user = state, saveUsers = funcion para guardar state
    const [user, dataUser] = useState({
        name: '',
        lastname: '',
        alias: '',
        wiw: '',
        role: ''
    });
    //Query a la API (backend)
    const consultarAPI = async () => {
        const userConsulta = await matrizAxios.get(`/users/${id}`);

        //Colocar en el state
        dataUser(userConsulta.data);
    }
    /* eslint-disable */

    // eslint-disable-next-line: //* /useffect, cuando el componente carga */ //es
    useEffect(() => {
        consultarAPI();
    }, []);


    //Funcion para leer los datos del form
    const updateState = e => {
        //Almacenar lo que el usuario escribe en el state
        dataUser({
            //obtener copia del state actual
            ...user,
            [e.target.name]: e.target.value
            /* [e.target.value ] : {selectRole:e.target.value} */
        })
        /*  console.log(user); */
    }

    /* Envia una peticion enAXIOS para update User */
    const updateUser = e =>{
        e.preventDefault();

        //Enviar peticion Axios
        matrizAxios.put(`/users/${user.Id_user}`, user).then(res =>{
            if (res.data.code === 11000) {
                Swal.fire({
                    type: 'error',
                    title: 'Hubo un error',
                    text: 'El usuario ya esta registrado'
                })
            } else {
                console.log(res.data);
                Swal.fire(
                    '¡Bien Hecho!',
                    '¡Se actualizo correctamente!',
                    'success'
                  )
            }

            //redireccionar
            props.history.push('/users');
        });
    }

    /* Validar Usuario */
    const validarUser = () => {
        //Aplicar destructuring
        const { name, lastname, alias, wiw, role } = user;
        //Revisar que las propiedas del state tenga contenido
        /* console.log(user); */
        let valido =
            !name.length ||
            !lastname.length ||
            !alias.length ||
            !wiw.length ||
            !role.length;
        //regresa un true o false
        return valido;
    };


    return (
        <Fragment>
            <h2>Editar Usuario</h2>
            <form onSubmit={updateUser}>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text"
                        placeholder="Nombre Usuario"
                        name="name"
                        onChange={updateState} 
                        value={user.name}
                        />
                </div>

                <div className="campo">
                    <label>Apellidos:</label>
                    <input type="text"
                        placeholder="Apellidos Usuario"
                        name="lastname"
                        onChange={updateState} 
                        value={user.lastname}
                        />
                </div>

                <div className="campo">
                    <label>Alias:</label>
                    <input type="text"
                        placeholder="Alias"
                        name="alias"
                        onChange={updateState} 
                        value={user.alias}
                        />
                </div>

                <div className="campo">
                    <label>WiW:</label>
                    <input type="text"
                        placeholder="Who is Who"
                        name="wiw"
                        onChange={updateState} 
                        value={user.wiw}
                        />
                </div>

                <div className="form-group campo">
                    <label htmlFor="inputState">Role</label>
                    <select name="role" className="campo" onChange={updateState} value={user.role}>
                        <option value>Seleccionar...</option>
                        <option value='Super Admin'>Super Admin</option>
                        <option value='Admin'>Admin</option>
                        <option value='Gestor'>Gestor</option>
                        <option value='Usuario'>Usuario</option>

                    </select>
                </div>

                <div className="enviar">
                    <input type="submit"
                        className="btn btn-outline-systems"
                        value="Guardar cambios"
                        disabled={validarUser()} />
                </div>

            </form>
        </Fragment >
    )
}
//Hid order Component HOC, es una funcion que toma un componente y retorna uno nuevo
export default withRouter(EditUser);