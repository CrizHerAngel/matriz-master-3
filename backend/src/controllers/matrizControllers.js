const Matriz = require('../models/Matriz');

/************* Add Matriz ****************/
exports.newMatriz = async (req, res) => {
  const matriz = new Matriz(req.body);
  try {
    await matriz.save();
    res.json({ matriz });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};
/* OBTENER MATRICES */
exports.listMatriz = async (req, res) => {
  try {
    const matrices = await Matriz.findAll({});
    res.json({ matrices });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};
/*ACTUALIZAR MATRIZ*/
exports.updateMatriz = async (req, res) => {
  try {
    const { matriz_name } = req.body;
    const nuevaMatriz = {};

    let matriz = await Matriz.findByPk(req.params.id);
    if (!matriz) {
      return res.status(404).json({ msg: 'No existe la matriz' });
    }
    //Creamos un objecto con la nueva informacion
    if (matriz_name) {
      nuevaMatriz.matriz_name = matriz_name;
    }
    //Actualizacion de Matriz
    matriz = await Matriz.update(
      {
        matriz_name: req.body.matriz_name,
      },
      {
        where: { id_matrix: req.params.id },
      },
      nuevaMatriz,
      { new: true }
    );
    res.json({ matriz });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};
/*DELETE MATRIX*/
exports.deleteMatriz = async (req, res) => {
  try {
    let matriz = await Matriz.findByPk(req.params.id);
    if (!matriz) {
      return res.status(404).json({ msg: 'No existe la matriz' });
    }
    //Eliminar una matriz
    await Matriz.destroy({ where: { id_matrix: req.params.id } });
    res.json({ msg: 'Matriz eliminada' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};
