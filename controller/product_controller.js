
const Product = require('../model/product');


/**
 *  Create following API Point for the Product
 * 
 *  1) Create Product
 *  2) Delete Product
 *  3) View Product
 *  4) Update Product
 * 
 */


module.exports.createProduct = async function(req,res){
     try{
         const name = req.body.name;
         const price = req.body.price;
         const category = req.body.category;
         const description = req.body.description;

         const newProduct = await Product.create({  
               name:name,
               price:price,
               category:category,
               description:description
         });
         console.log("Product created successfully");

         return res.status(200).json({
              message:"Product created Successfully",
              data:newProduct, 
         });
     }
     catch(err){
        
          console.log("Error in creating the product");

          return res.status(500).json({
               message:'Internal Server Error'
          })

     };

}