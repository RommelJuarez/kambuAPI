const routes=require('express').Router();
const products=require('../controllers/products');

routes.get('/',products.getAllProducts);
routes.get('/:id',products.getOneProduct);
routes.post('/',products.createProduct);
routes.put('/:id',products.updateProduct);
routes.delete('/:id',products.deleteProduct);

module.exports=routes;