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
        <div className="btn-group dropright">
          <Link
            to={'/registro'}
            className="registro btn-navigation btn-systems dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-edit p-2" />
            Registros
          </Link>
          <div className="dropdown-menu dropdown-menu-right ml-2">
            <Link to={'/registro/matriz'} className="dropdown-item">
              Matriz
            </Link>
            <Link to={'/registro/clientes'} className="dropdown-item">
              Clientes
            </Link>
            <Link to={'/registro/sl'} className="dropdown-item">
              Service Line
            </Link>
            <Link to={'/registro/areas'} className="dropdown-item">
              Áreas
            </Link>
            <Link to={'/registro/cargo'} className="dropdown-item">
              Cargo
            </Link>
          </div>
        </div>
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
