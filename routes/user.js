const express = require('express');
const router = express.Router();
const userController  = require('../controller/user_controller');
const passport = require('passport');


router.post('/create' ,userController.createUser);
router.post('/create-session',passport.authenticate(
    'local', 
    {failureRedirect:'user/sign-in'},   
),userController.createSession);


module.exports = router;