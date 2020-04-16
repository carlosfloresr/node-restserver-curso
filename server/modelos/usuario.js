const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let Schema = mongoose.Schema;

let usuarioEsquema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre campo Obligatorio']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: { //no es obligatorio
        type: String,
        required: false
    },
    role: { //tiene la propiedad default 'USER_ROLE'
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: { //Boolean
        type: Boolean,
        estado: true,
        default: true
    },
    google: { //boolean
        type: Boolean,
        default: false,
        estado: false
    }
});

usuarioEsquema.method.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

usuarioEsquema.plugin(uniqueValidator, { message: '{PATH} Debe ser unico' });
module.exports = mongoose.model('usuario', usuarioEsquema);