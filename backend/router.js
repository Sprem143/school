const express= require('express')
const router = express.Router();
console.log("router is loaded");

router.use('/director', require('./src/features/director/director.router'))
router.use('/student', require('./src/features/student/student.router'))
router.use('/teacher', require('./src/features/teacher/teacher.router'))
module.exports = router;