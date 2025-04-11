const routes=require('express').Router();
const productsRoutes=require('./productsRoutes');
const customersRoutes=require('./customersRoutes');
const categoriesRoutes=require('./categoryRoutes');

routes.use('/',require('./swagger'));
routes.use('/products',productsRoutes);
routes.use('/customers', customersRoutes);
routes.use('/categories',categoriesRoutes);

module.exports=routes;