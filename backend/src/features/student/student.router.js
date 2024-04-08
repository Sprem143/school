const express= require('express')
const router = express.Router();
const studentController = require('./student.controller.js')
router.post('/signin', studentController.signin);
router.get('/logout', studentController.logout);

module.exports= router;