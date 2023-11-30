import Product from '../mode1/product-schema.js';
export const getProducts = (request,response) =>{
    try{
        const products=await Product.find({});
        
        responsr.status(200).json(products);

    }catch(error){
        response.status(500).json({message: error.message});
    }
}