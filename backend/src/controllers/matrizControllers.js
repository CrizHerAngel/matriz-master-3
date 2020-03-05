const Matriz = require('../models/Matriz');

/************* Add Matriz ****************/
exports.newMatriz = async (req, res, next) => {
  const matriz = new Matriz(req.body);
  try {
    await matriz.save();
    res.json({ mensaje: 'Matriz agregada correctamente' });
  } catch (error) {
    console.log(error);
    res.json({ mensaje: 'Hubo unn error' });
    next();
  }
};
exports.listMatriz = async (req, res, next) => {
  try {
    const matriz = await Matriz.findAll({});
    res.json(matriz);
  } catch (error) {
    console.log(error);
    next();
  }
};
