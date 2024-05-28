const mongoose = require("mongoose"); // importando el componente mogoose
const CarritoSchema = mongoose.Schema({
    nombre_producto: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    proveedor: {
        type: String,
        requiered: true,
    },
    cantidad: {
        type: Number,
        requiered: true,
    },
    categoria:{
        type: String,
        requiered: true,
    }
});
module.exports = mongoose.model("carrito", CarritoSchema);