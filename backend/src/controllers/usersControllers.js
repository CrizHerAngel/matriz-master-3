const Usuarios = require('../models/Users');
/* Importamos JWT-- pruebas de autenticacion */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Agrega un Nuevo Usuario /***************** USUARIO DE REGISTRO A AUTENTICACION */ */
exports.newUser = async (req, res, next) => {
  const user = new Usuarios(req.body);
  user.password = await bcrypt.hash(req.body.password, 12); /* Coloque esto */
  try {
    await user.save();
    res.json({ mensaje: 'Agregado Correctamente' });
  } catch (error) {
    console.log(error);
    res.json({ mensaje: 'Hubo un error' }); /* Esto tambien lo coloque */
    next();
  }
};

exports.listUsers = async (req, res, next) => {
  try {
    const user = await Usuarios.findAll({});
    res.json(user);
  } catch (error) {
    console.log(error);
    next();
  }
};

//Muestra  un usuario por ID
exports.listUserId = async (req, res, next) => {
  const user = await Usuarios.findByPk(req.params.id);
  if (!user) {
    res.json({ mensaje: 'Ese Usuario no existe' });
    next();
  }
  //Mostrar el usuario
  res.json(user);
};
//Actualizar cliente por ID
exports.updateUser = async (req, res, next) => {
  try {
    const user = await Usuarios.update(
      {
        name: req.body.name,
        lastname: req.body.lastname,
        alias: req.body.alias,
        wiw: req.body.wiw,
        role: req.body.role,
        password: req.body.password,
      },
      {
        where: { Id_user: req.params.id },
      }
    );
    res.json(req.body);
  } catch (error) {
    console.log(error);
    res.send(error);
    next();
  }
};
//Eliminar usuario por medio del ID
exports.deleteUser = async (req, res, next) => {
  try {
    await Usuarios.destroy({ where: { Id_user: req.params.id } });
    res.json({ mensaje: 'El usuario ha sido eliminado correctamente' });
  } catch (error) {
    console.log(error);
    next();
  }
};

/*********************************** Modulo de Autenticacion de Users   ************************** */

exports.authenticateUser = async (req, res, next) => {
  const { alias, password } = req.body;
  const usuario = await Usuarios.findOne({
    where: {
      alias: alias,
    },
  });

  if (!usuario) {
    //Si el usuario no existe
    await res.status(401).json({ mensaje: 'El usuario no existe' });
    next();
  } else {
    // el usuario existe, verificar si password es correcto o incorrecto
    if (!bcrypt.compareSync(password, usuario.password)) {
      //Si el password es incorrecto
      await res.status(401).json({ mensaje: 'Password incorrecto' });
      next();
    } else {
      //password correcto, firmar el token
      const token = jwt.sign(
        {
          alias: usuario.alias,
          name: usuario.name,
          Id_user: usuario.Id_user,
        },
        'KEYSECRET',
        {
          expiresIn: '4h',
        }
      );
      //Retornar el token
      res.json({ token });
    }
  }
};
