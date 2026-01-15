const mongoose = require('mongoose');
const config = require('../config/config');

const connect = ()=>{
    mongoose.connect(config.MONGO_URL)
    .then(()=>{
        console.log("Database connected");
        
    })
    .catch((error)=>{
        console.log(error);
    })
}

module.exports = connect;