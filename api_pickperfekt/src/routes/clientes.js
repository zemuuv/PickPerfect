const express = require("express");
const router = express.Router(); //manejador de rutas de express
const clienteSchema = require("../models/clientes");
const verifyToken = require("./validate_token");
router.post("/clientes", (req, res) => {
    const clientes = clienteSchema(req.body);
    clientes
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.get("/clientes",  (req, res) => {
    clienteSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
