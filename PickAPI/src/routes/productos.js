const express = require("express");
const router = express.Router(); //manejador de rutas de express
const productosSchema = require("../models/productos");
router.post("/products", (req, res) => {
    const productos = productosSchema(req.body);
    productos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { nombre_producto, descripcion, precio, proveedor, cantidad } = req.body;
    productoSchema
        .updateOne({ _id: id }, {
            $set: { nombre_producto, descripcion, precio, proveedor, cantidad }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    productoSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
router.get("/products", (req, res) => {
    productosSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;