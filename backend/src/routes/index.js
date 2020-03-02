const express = require('express');
const router = express.Router();

/* Import Controllers */
const usersControllers = require('../controllers/usersControllers');

module.exports = function() {
  //RUTAS
  /* AGREGANDO USER VIA POST */
  router.post('/users', usersControllers.newUser);
  /* OBETENER TODOS LOS USUARIOS */
  router.get('/users', usersControllers.listUsers);
  /* MUESTRA UN USUARIO POR ID */
  router.get('/users/:id', usersControllers.listUserId);
  /* Actualizar usuario */
  router.put('/users/:id', usersControllers.updateUser);
  /* Eliminar usuario */
  router.delete('/users/:id', usersControllers.deleteUser);

  /********************************** USUARIOS AD ************************************************* */
  router.post('/login', usersControllers.authenticateUser);
  return router;
};
