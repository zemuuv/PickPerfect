const express = require("express");
const router = express.Router(); //manejador de rutas de express
const categoriaSchema = require("../models/categorias");
const productosSchema = require("../models/productos");
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
router.put("/categorias/:nombre_categoria", async (req, res) => {
    try {
        const { nombre_categoria } = req.params;

        // Buscar productos que tengan la misma categoría que la categoría proporcionada
        const productos = await productosSchema.find({ categorias: nombre_categoria });

        // Obtener los IDs de los productos encontrados
        const idsProductos = productos.map(producto => producto._id);

        // Actualizar la categoría correspondiente con los IDs de los productos
        const result = await categoriaSchema.updateOne(
            { nombre_categoria }, // Criterio de búsqueda: Nombre de la categoría
            { $addToSet: { productos: { $each: idsProductos } } } // Actualización: Agregar IDs de productos al conjunto de productos
        );

        // Responder con los datos de la categoría actualizada en formato JSON
        res.json(result);
    } catch (error) {
        // Imprimir el error completo en la consola del servidor
        console.error(error);
        // Responder con un mensaje de error en formato JSON
        res.status(500).json({ message: error.message });
    }
});
router.get("/categorias",  (req, res) => {
    categoriaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.delete('/delete-all-categories', async (req, res) => {
    try {
        const result = await categoriaSchema.deleteMany({});
        res.json({ message: `${result.deletedCount} categorias eliminados` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar productos' });
    }
});
module.exports = router;