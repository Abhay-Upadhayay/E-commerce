const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports.postRegisterController = async (req,res)=>{
    try {

        const {username , email , role , password} = req.body;

        if(!username){
            res.status(400).json({message : "Username fields are required"});
        }
        if(!email){
            res.status(400).json({message : "Email fields are required"});
        }
        if(!password){
            res.status(400).json({message : "Password fields are required"});
        }
        if(!role){
            res.status(400).json({message : "Role fields are required"});
        }
        
        let user = await userModel.findOne({email})



        if(user){
            res.status(400).json({message : "User already exist"})
        }

        let hashPassword = await bcrypt.hash(password,10);

        user = await userModel.create({
            username : username,
            email : email,
            password : hashPassword,
            role : role
        })

        let token = jwt.sign({
            id : user._id,
            email : user.email
        },config.JWT_SECRET);

        res.status(201).json({message : `${role} registered succesfully` , token , role})

    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error" , error : error.message})
    }
}