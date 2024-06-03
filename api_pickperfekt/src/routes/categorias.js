const express = require("express");
const router = express.Router(); //manejador de rutas de express
const categoriaSchema = require("../models/categorias");
const verifyToken = require("./validate_token");
router.post("/categorias", (req, res) => {
    const categorias = categoriaSchema(req.body);
    categorias
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.get('/productosCategorias', (req, res) => {
    // Categorías específicas a buscar
    const categoriasABuscar = req.body.categorias;

    // Consulta MongoDB para buscar productos que tengan las categorías mencionadas
    categoriaSchema.find({ nombre_categoria: { $in: categoriasABuscar } })
        .then(result => {
            // Resultado de la consulta
            console.log('Resultados:', result);
            // Envío de los resultados al cliente
            res.send(result);
        })
        .catch(err => {
            console.error('Error al buscar categorias:', err);
            // Manejo de error
            res.status(500).send('Error interno del servidor');
        });
});

router.get("/categorias",  (req, res) => {
    categoriaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;