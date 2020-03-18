import React, { Fragment } from 'react';
import FormMatriz from './FormMatriz';
import MatrizList from './MatrizList';

const Matrices = () => {
  return (
    <Fragment>
      <h1 className="display-4">Alta de Archivos Matriz</h1>
      <hr />
      <main>
        <div className="row justify-content-between">
          <FormMatriz />
          <div className="col">
            <MatrizList />
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default Matrices;
