const swaggerAutogen= require('swagger-autogen')();

const doc={
    info:{
        title:'KambuApi',
        description:'KambuApi api documentation'
    },
    host:'localhost:8080',
    schemes:['http','https'],
    tags:[{name:'Customers'},{name:'Products'},{name:'Categories'},{name:'Reviews'}]
};
const outputFile='./swagger.json';
const endpointsFiles=['./routes/index.js'];
swaggerAutogen(outputFile,endpointsFiles,doc);
