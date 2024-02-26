const swaggerJsdoc=require('swagger-jsdoc');
// const gf=require('../routes/*.js')
const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Node js application",
            version:'1.0.0'
        },
        servers:[{
            url:"http://localhost:8000"
        },]

    },
    apis:['./routes/*.js'],
};
// require('')
// console.log(options)
const swaggerspec=swaggerJsdoc(options)
module.exports=swaggerspec
