const jwt = require('jsonwebtoken');
const config = require('../config/config')
const userModel = require('../models/user.model');

module.exports.protected = async (req,res) => {
    try {
       
        const token = req.header.authorization.split(" ")[1];

        if(!token){
            res.status(401).json({message : "Unauthorized User"});
        }

        const decoded = jwt.verify(token , config.JWT_SECRET);

        const user = await userModel.findOne(decoded.id);

        if(!user){
            res.status(401).json({ message: "Unauthorized User" });
        }

        req.user = user;
        req.userId = decoded.id;
        
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error" , error : error.message})
    }
}