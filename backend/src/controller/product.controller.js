const productModel = require('../models/product.model');

module.exports.createProductController = async (req,res) =>{
    try {
        const {title , category , discription, price , forWhom} = req.body;
        const media = req.file;
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error" , error : error.message});
    }
}