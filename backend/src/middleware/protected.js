const jwt = require('jsonwebtoken');
const config = require('../config/config')
const userModel = require('../models/user.model');

module.exports.protected = async (req,res,next) => {
    try {
       
        const token = req.headers.authorization.split(" ")[1];

        if(!token){
            res.status(401).json({message : "Unauthorized User"});
            return;
        }
        const decoded = jwt.verify(token , config.JWT_SECRET);

        const user = await userModel.findById(decoded.id);

        if(!user){
            res.status(401).json({ message: "Unauthorized User" });
            return;
        }

        req.user = user;
        req.userId = decoded.id;
        
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error" , error : error.message})
    }
}