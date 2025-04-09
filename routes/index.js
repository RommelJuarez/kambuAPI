const routes=require('express').Router();


routes.use('/',(req,res)=>{
    res.send('KambuAPI');
});



module.exports=routes;