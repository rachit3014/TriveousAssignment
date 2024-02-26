const express = require("express");
const port = 8000;
const app = express();
const db = require("./config/mongoose");
const swaggerUI=require('swagger-ui-express');
const swaggerSpec=require('./swagger')

const passport=require('passport')
const Strategy=require('./config/passport-jwt')

app.use(express.urlencoded());
// app.use("/user", require("./routes/user"));

app.use("/", require("./routes"));
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec,{explorer:true}))
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("yup server is running on port", port);
});
