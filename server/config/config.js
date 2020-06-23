//==============================
//PUERTO
//==============================
process.env.PORT = process.env.PORT || 3000;

//==============================
//ENTORNO
//==============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==============================
//Vencimiento del token
//==============================
//60 segundos
//60 minutos
//24 horas
//120 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 120;

//==============================
//seed DE AUTENTICACION
//==============================

process.env.SEED = process.env.SEED || 'este-es-el-SEED-desarrollo';


//==============================
//BD
//==============================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/caf';
} else {
    urlDB = process.env.MONGO_miURL;
}
process.env.URLDB = urlDB;