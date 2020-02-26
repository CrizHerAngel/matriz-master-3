const express = require('express');
const app = express();
const routes = require('./routes');
const db = require('./models/database');
const bodyParser = require('body-parser');

/* CORS permite que un clientese conecte a otro servidor para el intercambio de recursos */
const cors = require('cors');

/* IMPORTANDO LOS MODELS */
require('./models/Users');
/* require('./models/Role') */
 
/***************SETTINGS DATABASE */
db
  .sync()
  .then(() => console.log('Conectado al servidor'))
  .catch((error) => console.log(error));

/*********************  CONFIGURATION SERVER  ********************************* */

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
  console.log('START SERVER ON PORT ' + app.get('port'));
});

/* **************************  MIDDLEWARE  **************************** */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


/************************** ROUTES   ************************************************* */
app.use('/', routes());
