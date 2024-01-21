
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');

//authentication using passport
passport.use(new LocalStrategy({
       usernameField:'email',
       passReqToCallback:true
},
function(req,email , password , done){
       
         //find the user and establish the identity

         User.findOne({email:email})
         .then((user) =>{
              if(!user || user.password != password){
                  console.log('error' , 'Invalid Username/Password');
                  return done(null , false);
              }
              return done(null ,user);
         })
         .catch((err) =>{
              console.log('Error in finding user from local strategy' , err);
              return done(err);
         });
   }
))

passport.serializeUser(function(user,done){
        return done(null, user.id);
});

passport.deserializeUser(function(id,done){
    
        User.findById(id)
        .then((user)=>{
               return done(null ,user);
        })
        .catch((err)=>{
               console.log("Error in finding user ---> passport");
               return done(err);
        })
        
});

//check user is authenticated 

passport.checkAuthentication = function(req,res ,next){

       if(req.isAuthenticated()){
           return next();
       }

       //user not sign then return login page
       return res.status(400).json({
               message:'user not logged in'
       });
}
passport.setAuthenticatedUser = function(req,res,next){

       if(req.isAuthenticated()){
           res.locals.user = req.user;
       }
       next();
}