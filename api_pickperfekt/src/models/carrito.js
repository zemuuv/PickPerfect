const mongoose = require("mongoose"); // importando el componente mogoose
const CarritoSchema = mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId, // Referencia al ID del producto
        ref: 'clientes' // Referencia al modelo de productos
    },
    productos: [{
        type: mongoose.Schema.Types.ObjectId, // Referencia al ID del producto
        ref: 'productos' // Referencia al modelo de productos
    }]
});
module.exports = mongoose.model("carrito", CarritoSchema);