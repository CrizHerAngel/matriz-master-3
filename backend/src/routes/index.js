const express = require('express');
const router = express.Router();

/* Import Controllers */
const usersControllers = require('../controllers/usersControllers');
const matrizControllers = require('../controllers/matrizControllers');
/*********************** MIDDLEWARE  ************************** */
/* const auth = require('../middleware/auth'); */

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
  /********************************************************************************** */
  router.post('/registro/matriz', matrizControllers.newMatriz);
  router.get('/registro/matriz', matrizControllers.listMatriz);
  router.put('/registro/matriz/:id', matrizControllers.updateMatriz);
  router.delete('/registro/matriz/:id', matrizControllers.deleteMatriz);
  /********************************** USUARIOS AD ************************************************* */
  router.post('/login', usersControllers.authenticateUser);
  return router;
};
