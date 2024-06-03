const mongoose = require("mongoose"); // importando el componente mogoose
const CategoriasSchema = mongoose.Schema({
    nombre_categoria: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    imagen: {
        type: String, //url a donde está la imagen
        required: true,
    },
    productos: [{
        type: mongoose.Schema.Types.ObjectId, // Referencia al ID del producto
        ref: 'productos' // Referencia al modelo de productos
    }]
});
module.exports = mongoose.model("categorias", CategoriasSchema);