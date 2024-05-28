const mongoose = require("mongoose"); // importando el componente mogoose
const CategoriasSchema = mongoose.Schema({
    nombre_categoria: {
        type: String,
        required: true,
    },
    productos: [{
        type: mongoose.Schema.Types.ObjectId, // Referencia al ID del producto
        ref: 'productos' // Referencia al modelo de productos
    }]
});
module.exports = mongoose.model("categorias", CategoriasSchema);