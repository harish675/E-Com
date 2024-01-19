const express = require('express');
const router = express.Router();


router.get('/',function(req,res){
    
       res.send('<h1> this home page </h1>');

})
router.use('/products' , require('./product'));



module.exports = router;