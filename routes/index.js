const routes=require('express').Router();
const productsRoutes=require('./products');
const customersRoutes=require('./customersRoutes');

routes.use('/',require('./swagger'));
routes.use('/products',productsRoutes);
routes.use('/customers', customersRoutes);

module.exports=routes;