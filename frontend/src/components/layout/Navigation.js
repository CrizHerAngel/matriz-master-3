import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <aside className="sidebar col-auto">
      <h2>Administración</h2>

      <nav className="navegacion">
        <Link to={'/home'} className="home btn-systems">
          <i className="fas fa-home p-2 " />
          Home
        </Link>
        <Link to={'/matriz'} className="matriz btn-systems ">
          <i className="fas fa-tasks p-2" />
          Matriz
        </Link>
        <Link to={'/users'} className="users btn-systems ">
          <i className="fas fa-users p-2" />
          Usuarios
        </Link>
        <Link to={'/controls'} className="controls btn-systems">
          <i className="fas fa-edit p-2" />
          Controles
        </Link>
        <Link to={'/history'} className="history btn-systems ">
          <i className="fas fa-book p-2" />
          Historial
        </Link>
        <Link to={'/preview'} className="preview btn-systems ">
          <i className="fas fa-eye p-2" />
          Vista Previa
        </Link>
        <Link to={'/vobo'} className="vobo btn-systems ">
          <i className="fas fa-user-check p-2" />
          Vistos Buenos
        </Link>
      </nav>
    </aside>
   
  );
};

export default Navigation;

