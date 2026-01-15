const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSSxXHLqu5lsHYkFlZkvXuo2ZamNvdqLiCg&s",
  },
  password : {
    type : String,
    required : true,
    minLength : 6
  },
  role : {
    type : String,
    enum : ["user","admin"],
    default : "user",
    required : true
  }
});


const userModel = mongoose.model("user" , userSchema);
module.exports = userModel;