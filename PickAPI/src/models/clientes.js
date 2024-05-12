const mongoose = require("mongoose"); // importando el componente mogoose
const clienteSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true,
    },
    contraseña: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("Cliente", clienteSchema);
