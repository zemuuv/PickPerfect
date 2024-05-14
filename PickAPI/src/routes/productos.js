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