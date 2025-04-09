const routes=require('express').Router();
const customersRoutes=require('./customersRoutes');
const swaggerRoute=require('./swagger');

routes.get('/',(req,res)=>{
    res.send('KambuAPI');
});

routes.use('/', swaggerRoute); 

routes.use('/customers', customersRoutes);

module.exports=routes;