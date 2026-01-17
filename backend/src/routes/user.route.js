const express = require('express');
const userController = require('../controller/user.controller')
const router = express.Router();

router.post("/register" , userController.postRegisterController);
router.post("/login" , userController.loginContoller);

module.exports = router