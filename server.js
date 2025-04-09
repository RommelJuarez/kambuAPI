const express=require('express');
const{initDB}=require('./db/dbConn');
const cors=require('cors');

const app=express();
const port=process.env.PORT || 8080;
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key, Authorization'
    );
    next();
  });
app.use(cors({methods:['GET','POST','PUT','DELETE','UPDATE','PATCH']}));
app.use(cors({origin:'*'}));
app.use(express.json());


initDB((err,database)=>{
    if(err){
        console.error('Error connecting to the database:',err);
        return;
    }
});

app.use('/',require('./routes'));

app.listen(port,()=>{console.log(`Running on port: ${port}`)});