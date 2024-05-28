const mongoose = require("mongoose"); // importando el componente mogoose
const bcrypt = require("bcrypt"); // importando el componente bcrypt
const clienteSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    clave: {
        type: String,
        required: true,
    },
});
clienteSchema.methods.encryptClave = async (clave) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(clave, salt);
  };
module.exports = mongoose.model("Cliente", clienteSchema);
