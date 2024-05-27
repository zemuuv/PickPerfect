const mongoose = require("mongoose"); // importando el componente mogoose
const ProductoSchema = mongoose.Schema({
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
    tipo:{
        type: String,
        requiered: true,
    }
});
module.exports = mongoose.model("productos", ProductoSchema);
