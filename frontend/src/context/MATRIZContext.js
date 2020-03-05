import React, { useState } from 'react';

const MATRIZContext = React.createContext([{}, () => {}]);

const MATRIZProvider = (props) => {
  //definir el state inical
  const [auth, saveAuth] = useState({
    token: '',
    auth: false,
  });
  return (
    <MATRIZContext.Provider value={[auth, saveAuth]}>
      {props.children}
    </MATRIZContext.Provider>
  );
};

export { MATRIZContext, MATRIZProvider };
