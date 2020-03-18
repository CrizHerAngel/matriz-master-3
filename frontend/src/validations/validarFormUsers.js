export default function validarFormUsers(valores) {
  let errores = {};

  //Validar name usuario
  if (!valores.name) {
    errores.name = 'El nombre es obligatorio';
  }

  //Validar lastname
  if (!valores.lastname) {
    errores.lastname = 'El apellido es obligatorio';
  }

  //Validar el alias
  if (!valores.alias) {
    errores.alias = 'El alias es obligatorio y único';
  } else if (valores.alias.length < 10) {
    errores.alias =
      'Alias debe tener minimo 10 digitos y primera letra en MAYÚSCULA';
  }

  //Validar el wiw
  if (!valores.wiw) {
    errores.wiw = 'El WiW es obligatorio y único';
  }

  //Validar el rol
  if (!valores.role) {
    errores.role = 'Debe escojer un role';
  } else if (valores.role === null) {
    errores.role = 'Debe escojer un role';
  }
  return errores;
}
