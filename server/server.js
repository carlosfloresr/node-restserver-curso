require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');



//parse application /x-www-form-urleconded
app.use(bodyParser.urlencoded({ extended: false }))

//pare application /json
app.use(bodyParser.json())


//configuracion global de rutas
app.use(require('./controladores/index'));



mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {
        if (err) throw err;

        console.log('Base de Datos Online');
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto : ', process.env.PORT);
});