const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');


app.use(express.urlencoded());
app.use(session({
     name:'something',
     secret:'something',
     saveUninitialized:false,
     resave:false,
     cookie:{
         maxAge:(1000*60*100)
     }
}));
//router
app.use('/',require('./routes'));


app.listen(port , function(err){
    
     if(err){ 
        console.log("Error in running the server");
     }
     console.log("Server is Running on pot" , port);
})
