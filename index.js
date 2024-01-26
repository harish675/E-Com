const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');

app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//set the  view engine
app.set('view engine','ejs');
app.set('views','./views');

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
