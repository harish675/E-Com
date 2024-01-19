
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
     name:{
          type:String,
          required:true
     },
     email:{
        type:'String',
        required:true,
     },
     role : {
          type:String,
          enum :['admin' ,'seller','buyer'],
          required:true,
     },
     password:{
        type:'String',
        required:true,
     }
},{
     timestamps:true,
})

const User = mongoose.model('User' , userSchema);

module.exports = User;