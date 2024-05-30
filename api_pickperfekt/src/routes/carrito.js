const express = require("express");
const router = express.Router(); //manejador de rutas de express
const carritoSchema = require("../models/carrito");
const productosSchema = require("../models/productos");
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
//endpoint para Modificar el carrito usando el id del cliente
router.put("/carrito/:id", async (req, res) => {

    const carrito = await carritoSchema.findOne({ cliente: req.params.id });
    if (!carrito) {
        const carro = carritoSchema({
            cliente: req.params.id
        });

        await carro
            .save().then((dataCarrito) => {
                carritoSchema
                    .updateOne(
                        { _id: dataCarrito._id },
                        {
                            $addToSet: { productos: req.body.idProducto },
                        }
                    )
                    .then((data) => {
                        console.log("entro")
                        productosSchema.updateOne({
                            _id: req.body.idProducto
                        },
                            {
                                $inc:{
                                    cantidad:-1
                                }
                            })
                        res.json(data);
                    })
                    .catch((error) => {
                        res.json({ message: error });
                    });
            })
    } else if (carrito) {
        carritoSchema
            .updateOne(
                { _id: carrito._id },
                {
                    $addToSet: { productos: req.body.idProducto },
                }
            )
            .then(async(data) => {
                console.log("entro"+req.body.idProducto);
                await productosSchema.updateOne({
                    _id: req.body.idProducto
                },
                    {
                        $inc:{
                            cantidad:-1
                        }
                    })
                res.json(data);
            })
            .catch((error) => {
                res.json({ message: error });
            });
    }
});
router.get("/carrito", (req, res) => {
    carritoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;