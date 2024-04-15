const express= require('express')
const router = express.Router();
const directorController= require('./director.controller.js')

router.post('/signin', directorController.signin);
router.post('/signup', directorController.signup);
router.get('/logout', directorController.logout);
router.get('/getallstudents', directorController.getallstudents);
router.get('/getallteachers', directorController.getallteachers);
router.post('/getonestudent', directorController.getonestudent);
router.post('/getoneteacher', directorController.getoneteacher);
router.post('/addstudent', directorController.addstudent);
router.post('/addteacher', directorController.addteacher);
router.delete('/removestudent',directorController.removestudent);
router.put('/updatestudent',directorController.updatestudent);
router.put('/updateteacher',directorController.updateteacher);
router.post('/searchteacher',directorController.searchteacher)
router.post('/searchstudent',directorController.searchstudent)
router.post('/getclassstudent',directorController.getclassstudent);
router.post('/attendence',directorController.attendence);
router.post('/noofpresentstudent',directorController.noofpresentstudent);

module.exports= router;