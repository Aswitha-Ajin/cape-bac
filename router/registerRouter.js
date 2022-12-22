const express = require('express');
const router = express.Router();
const registerModule = require('../modules/regModule');

router.post('/signup', registerModule.signup);

router.post('/signin', registerModule.signin);
//router.get('/getdata', auth.authenticateUser,registermodule.getdata)
module.exports = router;