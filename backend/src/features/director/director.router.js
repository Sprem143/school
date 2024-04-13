const express= require('express')
const router = express.Router();
const directorController= require('./director.controller.js')

router.post('/signin', directorController.signin);
router.post('/signup', directorController.signup);
router.get('/logout', directorController.logout);
router.get('/getallstudents', directorController.getallstudents);
router.get('/getallteachers', directorController.getallteachers);
router.post('/getonestudent', directorController.getonestudent);
router.post('/addstudent', directorController.addstudent);
router.post('/addteacher', directorController.addteacher);
router.delete('/removestudent',directorController.removestudent);
router.put('/updatestudent',directorController.updatestudent);
module.exports= router;