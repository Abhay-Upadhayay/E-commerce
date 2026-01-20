const Imagekit = require('imagekit');
const config = require('../config/config');

const imagekit = new Imagekit({
    publicKey : config.IMAGEKIT_PUBLIC_KEY,
    privateKey : config.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : config.IMAGEKIT_URL_ENDPOINT
})


module.exports = imagekit;