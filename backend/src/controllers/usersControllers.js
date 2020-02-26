const Usuarios = require('../models/Users');
/* const Role = require('../models/Role') */
//Agrega un Nuevo Usuario
exports.newUser = async (req, res, next) => {
  const user = new Usuarios(req.body);
  try {
    await user.save();
    res.json({ mensaje: 'Agregado Correctamente' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.listUsers = async (req, res, next) => {
  try {
    const user = await Usuarios.findAll({
    });
    res.json(user)
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

