var mongoose = require('mongoose');
var uniqueValitador = require('mongoose-unique-validator');

var Schema = mongoose.Schema

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
}

var usuarioSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique:false, required: [true, 'El correo es necesario'] },
    password: { type: String, required: [true, 'la contraseña es necesaria'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos }
});


usuarioSchema.plugin( uniqueValitador,  { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);