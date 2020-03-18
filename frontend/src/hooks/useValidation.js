import { useState, useEffect } from 'react';
const useValidation = (stateInitial, validar, funcion) => {
  const [valores, saveValores] = useState(stateInitial);
  const [errores, saveErrores] = useState({});
  const [submitForm, saveSubmitForm] = useState(false);

  useEffect(
    () => {
      if (submitForm) {
        const noErrors = Object.keys(errores).length === 0;

        if (noErrors) {
          funcion(); //Esta funcion puede ser crea-cuenta, formulario de llenado de dtos o login etc.
        }
        saveSubmitForm(false);
      }
    },
    // eslint-disable-next-line
    [errores]
  );

  //Funcion que se ejecuta cuando el usuario escribe algo
  const handleChange = (e) => {
    saveValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  //Funcion que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidation = validar(valores);
    saveErrores(errorsValidation);
    saveSubmitForm(true);
  };

  //Cuando se realiza el evento de blur
  /*  const handleBlur = () => {
    const errorsValidation = validar(valores);
    saveErrores(errorsValidation);
  }; */

  return {
    valores,
    errores,
    handleSubmit,
    handleChange,
    /*  handleBlur, */
  };
};

export default useValidation;
