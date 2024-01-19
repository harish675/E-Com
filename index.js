const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');


app.listen(port , function(err){
    
     if(err){ 
        console.log("Error in running the server");
     }
     console.log("Server is Running on pot" , port);
})
