const routes=require('express').Router();
const categories=require('../controllers/categoryControllers');
const categoryValidators=require('../middlewares/categoriesValidators');

routes.get('/',categories.getAllCategories);
routes.get('/:id',categoryValidators.validateID,categories.getOneCategory);
routes.post('/',categoryValidators.validateCreateCategoryBody,categories.createCategory);
routes.put('/:id',categoryValidators.validateCategoryUpdateBody,categories.updateCategory);
routes.delete('/:id',categoryValidators.validateID,categories.deleteCategory);

module.exports=routes;