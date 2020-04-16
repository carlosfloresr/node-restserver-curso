//==============================
//PUERTO
//==============================
process.env.PORT = process.env.PORT || 3000;

//==============================
//ENTORNO
//==============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==============================
//BD
//==============================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/caf';
} else {
    urlDB = 'mongodb+srv://carlosfloresr:DDlRMm2mtMmnxpSu\@cluster0-tn9vt.mongodb.net/cafe'
}
process.env.URLDB = urlDB;