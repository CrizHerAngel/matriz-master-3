import React, { Fragment } from 'react';
import useValidation from '../../hooks/useValidation';
import validarFormUser from '../../validations/validarFormUsers';

const STATE_INICIAL = {
  name: '',
  lastname: '',
  alias: '',
  wiw: '',
  role: '',
};

const FormUserNew = () => {
  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidation(STATE_INICIAL, validarFormUser, createUsers);

  const { name, lastname, alias, wiw, role } = valores;

  function createUsers() {}

  return (
    <Fragment>
      <h2>Nuevo Usuario</h2>
      <form className="m-0 mr-auto ml-auto" onSubmit={handleSubmit}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre(s):</label>
          <input
            type="text"
            id="name"
            placeholder="Nombre Usuario"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
        </div>
        {errores.name && (
          <p className="mensaje error text-center text-danger alert alert-danger">
            {errores.name}
          </p>
        )}

        <div className="campo">
          <label>Apellidos(s):</label>
          <input
            type="text"
            id="lastname"
            placeholder="Apellidos Usuario"
            name="lastname"
            value={lastname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errores.lastname && (
          <p className="mensaje error text-center text-danger alert alert-danger">
            {errores.lastname}
          </p>
        )}

        <div className="campo">
          <label>Alias:</label>
          <input
            type="text"
            id="alias"
            placeholder="Alias"
            name="alias"
            value={alias}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errores.alias && (
          <p className="mensaje error text-center text-danger alert alert-danger">
            {errores.alias}
          </p>
        )}

        <div className="campo">
          <label>WiW:</label>
          <input
            type="text"
            id="wiw"
            placeholder="Who is Who"
            name="wiw"
            value={wiw}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errores.wiw && (
          <p className="mensaje error text-center text-danger alert alert-danger">
            {errores.wiw}
          </p>
        )}
        <div className="form-group campo">
          <label htmlFor="inputState">Role</label>
          <select
            id="role"
            name="role"
            className="campo"
            onChange={handleChange}
          >
            <option value={role}>Seleccionar...</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Gestor">Gestor</option>
            <option value="Usuario">Usuario</option>
          </select>
        </div>
        {errores.role && (
          <p className="mensaje error text-center text-danger alert alert-danger">
            {errores.role}
          </p>
        )}

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-outline-systems"
            value="Agregar Usuario"
          />
        </div>
      </form>
    </Fragment>
  );
};

export default FormUserNew;
