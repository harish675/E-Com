
const User = require('../model/user');


/**
 *  In this user Controller we have following API
 * 
 *  1)Creating User
 *  2) logging   User
 *  3) User Profile
 *  4) showing login Page
 *  5) showing register Page 
 * 
 */



//creating user
module.exports.createUser = async function(req,res){
    
    try{

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const role = req.body.role;

        //find user exits or not 
       const user = await User.findOne({email:email});

       if(user){ 
          console.log("user Already Exists");
           return res.status(400).json({
               message:"User Already Exists",
           })
       }

        const newUser = await User.create({
            name:name,
            email:email,
            password:password,
            role:role
        })
        newUser.save();
        console.log("new User created Successfully", newUser);

        return res.status(200).json({
             message:"User created Successfully",
             data:newUser,
        });
    }catch(err){
        
        console.log("Error in creating User", err);

        return res.status(500).json({
             message:"Internal Server Error",
        })

    }

}

//create session for user

module.exports.createSession = async function(req,res){
    
     console.log("User signed in successfully");
     const user = req.user;
     return res.status(200).json({
         message:"user login successfully",
         data:user
     })
    

}

//rendering login page for user

module.exports.loginPage = function(req,res){
       
     return res.render('loginPage');

}