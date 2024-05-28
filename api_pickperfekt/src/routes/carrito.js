const express = require("express");
const router = express.Router(); //manejador de rutas de express
const carritoSchema = require("../models/carrito");
router.post("/carrito", (req, res) => {
    const productos = carritoSchema(req.body);
    productos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.delete("/carrito/:id", (req, res) => {
    const { id } = req.params;
    carritoSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});