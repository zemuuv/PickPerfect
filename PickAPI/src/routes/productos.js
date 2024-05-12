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
module.exports = router;
