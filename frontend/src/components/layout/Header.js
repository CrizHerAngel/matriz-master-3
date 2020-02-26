import React from 'react';

const Header = () => (
  <header className="barra shadow-sm">
    {/* { shadow-sm yo lo integre} */}
    <div className="contenedor">
      <img
        src="../img/logo.png"
        width="200px"
        alt="T-Systems"
        className="position-relative"
      />
    </div>
  </header>
);
export default Header;

