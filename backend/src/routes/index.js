const express = require('express');
const router = express.Router();

/* Import Controllers */

/* const homeControllers = require('../controllers/homeControllers'); */
const usersControllers = require('../controllers/usersControllers');


module.exports = function() {
  //RUTAS
  router.post('/users', usersControllers.newUser
  ); /* AGREGANDO USER VIA POST */ /* OBETENER TODOS LOS USUARIOS */ /* MUESTRA UN USUARIO POR ID */
  router.get('/users', usersControllers.listUsers);
  /*MUESTRA UN USUARIO EN ESPECIFICO  */
  router.get('/users/:id', usersControllers.listUserId);
  /* Actualizar usuario */
  router.put('/users/:id', usersControllers.updateUser);
  /* Eliminar usuario */
  router.delete('/users/:id', usersControllers.deleteUser);
  return router;
};

