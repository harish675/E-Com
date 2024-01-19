
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


//create product
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

//delete Product

module.exports.removeProduct = async function(req,res){
    
      try{
          const productId = req.params.id;
        
          //find the product 
          const deletedProduct = await Product.findByIdAndDelete(productId);

          if(!deletedProduct){
             console.log("Product not Found");
             return res.status(404).json({
                  message:'Product not Found',
             })
          }
          else{
            
             console.log("Product deleted Successfully" , deletedProduct);

             return res.status(200).json({
                  message:"Product deleted Successfully",
                  data:deletedProduct,
             })
          }
      }
      catch(err){
        
          console.log("Error in deleting the the Product" , err);

          return res.status(500).json({
               message:"Internal Server Error",
          })

      }

}

// view product
module.exports.viewProduct = async function(req,res){
    
     try{
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if(!product){
             console.log("Product not Found");

             return res.status(404).json({
                  message:"Product not found",
             })
        }else{ 
             console.log("Product is found");

             return res.status(200).json({
                  message:"The product viewed Successfully",
                  data:product,
             })
        }
     }
     catch(err){
          console.log("Error in finding and viewings the product",err);
          return res.status(500).json({
               message : "Internal Server Error",
         })
     }

}

//update product
module.exports.updateProduct = async function(req,res){
    
     try{
         const productId = req.params.id;
         const name = req.body.name;
         const price = req.body.price;
         const category = req.body.category;
         const description = req.body.description;

         const updatedProduct = await Product.findByIdAndUpdate(productId ,{ 
              name:name,
              price:price,
              category:category,
              description:description, 
         },
         { new: true }
         );
         if(!updatedProduct){
             console.log("Product not Found");
             return res.status(404).json({
                  message:"Product not Found",
             })
         }
         console.log("Product is updated Successfully" ,updatedProduct);

         return res.status(200).json({
              message:"Product Updated Successfully",
              data:updatedProduct
         })

     }catch(err){
        console.log("Error in updating  the product" ,err);
        
        return res.status(500).json({
             message:"Internal Server Error",
        })
     }
}




