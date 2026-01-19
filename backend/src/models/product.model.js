const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true,
    },
    discription: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: [
        "General",
        "Electronics",
        "Clothing & Apparel",
        "Home & Kitchen",
        "Beauty & Personal Care",
        "Books & Stationery",
        "Sports & Outdoors",
        "Toys & Games",
        "Automotive",
        "Grocery & Food",
        "Health & Fitness",
        ],
        default: "General",
    },
    forWhom: {
        type: String,
        required: true,
        enum: ["men", "women", "kids", "everyone"],
        default: "everyone",
    },
    images: {
        type: [String],
        required: true,
        minlength: 1,
        maxlength: 10,
    },
});

const productModel = mongoose.model("product",productSchema);
module.exports = productModel;