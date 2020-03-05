const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  //Autorizacion por el header
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('No autenticado, No tienes permisos');
    error.statusCode = 401;
    throw error;
  }

  //Pbtener el token Y VERIFICARLO
  const token = authHeader.split(' ')[1];
  let revisarToken;
  try {
    revisarToken = jwt.verify(token, 'KEYSECRET');
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }
  //Si es un token valido, pero hay error
  if (!revisarToken) {
    const error = new Error('No autenticado');
    error.statusCode = 401;
    throw error;
  }
  next();
};
