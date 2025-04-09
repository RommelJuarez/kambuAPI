const routes=require('express').Router();
const productsRoutes=require('./products');

routes.use('/',require('./swagger'));


routes.use('/products',productsRoutes);





module.exports=routes;