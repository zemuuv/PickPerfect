const mongoose = require("mongoose"); // importando el componente mogoose
const categorias = require("./categorias");
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
    imagen: {
        type: String, //url a donde está la imagen
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
    categorias: {
        type: String,
        requiered: true,
    }
    
});
module.exports = mongoose.model("productos", ProductoSchema);
