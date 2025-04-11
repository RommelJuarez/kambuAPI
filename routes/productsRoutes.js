const routes=require('express').Router();
const products=require('../controllers/productsControllers');
const productsValidators=require('../middlewares/productsValidators');
const idValidate=require('../middlewares/categoriesValidators');

routes.get('/',products.getAllProducts);
routes.get('/:id',idValidate.validateID,products.getOneProduct);
routes.post('/',productsValidators.validateProductsCreateteBody,products.createProduct);
routes.put('/:id',productsValidators.validateProductsUpdateBody,products.updateProduct);
routes.delete('/:id',idValidate.validateID,products.deleteProduct);

module.exports=routes;