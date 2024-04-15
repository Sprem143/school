const Director = require('./director.model');
const Student = require('../student/student.model');
const Teacher = require('../teacher/teacher.model');
const Attendence = require('../student/studentAttendence.model')
const jwt = require('jsonwebtoken');
const secret_key = 'prem_7366';


// ----get total present student
exports.noofpresentstudent = async (req, res) => {
   try{
    const { date } = req.body;
    let result = await Attendence.where({ dateNow: date }).find();
    let totalStudent = 0;
    // result.map((c) => {
    //     totalStudent = totalStudent + c.totalStudent;
    // })
    // console.log(result)
   res.status(200).json(result);
   }catch(err){
    res.status(201).json({message:"Internal error while fetching data"});
   }
}

// take attendence ------------

exports.attendence = async (req, res) => {
    try {
        let { pStudent, attendenceClass, dateNow, totalStudent } = req.body;
        const attendence = new Attendence({ pStudent, attendenceClass, dateNow, totalStudent });
        const result = await attendence.save();
        if (result) {
            console.log(result)
            res.status(200).json({ message: `Attendence saved successfully for date ${dateNow}` })
        }
    } catch (err) {
        res.status(201).json({ message: err });
        console.log(err)

    }
}

exports.signup = async (req, res) => {
    try {
        const director = new Director(req.body);
        await director.save();
        res.status(200).json(req.body);
    } catch (err) {
        res.status(201).json({ message: "Error while signing up director" })
    }
}

// --------director sign in --------
exports.signin = async (req, res) => {
    const { email, password } = req.body;
    try {

        let director = await Director.findOne({ email });
        if (director) {
            if (password == director.password) {
                const token = jwt.sign({ director }, secret_key, { expiresIn: "2h" })
                res.status(200).json({ token: token });
            } else {
                res.status(404).json({ message: 'Incorrect password' });
            }
        } else {
            res.status(404).json({ message: 'Director not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
// ---------add a student ----------
exports.addstudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(200).json({ message: "Student added successfully" })

    } catch (err) {
        res.status(201).json({ message: "Error while adding student" })
    }
}

// --------add teacher------------
exports.addteacher = async (req, res) => {
    try {
        const newTeacher = new Teacher(req.body);
        await newTeacher.save();
        res.status(200).json({ message: "Teacher added successfully" })
    } catch (err) {
        res.status(201).json({ message: "Error while adding teacher" });
    }
}
// ----- log out ------------
exports.logout = async (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                res.send('Logged out successfully');
            }
        });
    } catch (err) {
        res.status(201).json({ message: "Error while loging out director" })
    }
}

// ------------ get all student list---------

exports.getallstudents = async (req, res) => {
    try {
        let students = await Student.find();
        res.status(200).json(students)
    } catch (err) {
        res.status(201).json({ message: "Error while getting student list" })

    }
}
exports.getallteachers = async (req, res) => {
    try {
        let teacher = await Teacher.find();
        res.status(200).json(teacher)
    } catch (err) {
        res.status(201).json({ message: "Error while getting student list" })

    }
}

// ----------------get one student----------
exports.getonestudent = async (req, res) => {
    const email = req.body.email;
    try {
        let student = await Student.findOne({ email });
        res.status(200).json(student)
    } catch (err) {
        res.status(201).json({ message: "Error while getting student details" })
    }
}

exports.getclassstudent = async (req, res) => {
    try {
        const { cls } = req.body;
        const result = await Student.where({ standard: cls }).find();
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ message: "Internal server error" })
    }
}

exports.getoneteacher = async (req, res) => {
    const email = req.body.email;
    try {
        let teacher = await Teacher.findOne({ email });
        res.status(200).json(teacher)
    } catch (err) {
        res.status(201).json({ message: "Error while getting teacher details" })
    }
}

// --------search a teacher----------
exports.searchteacher = async (req, res) => {
    let st = req.body.st;
    if (!st) {
        return res.status(400).json({ message: 'Please enter teacher\'s name' });
    }
    try {
        let teachers = await Teacher.find({
            username: {
                $regex: st, $options: 'i'
            }
        })

        if (teachers.length === 0) {
            return res.status(404).json({ message: 'No teacher found' });
        }
        res.status(200).json(teachers);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.searchstudent = async (req, res) => {
    let ss = req.body.ss;
    if (!ss) {
        return res.status(400).json({ message: 'Please enter Student\'s name' });
    }
    try {
        let students = await Student.find({
            username: {
                $regex: ss, $options: 'i'
            }
        })

        if (students.length === 0) {
            return res.status(404).json({ message: 'No Student found' });
        }
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// ----------remove a student------
exports.removestudent = async (req, res) => {
    const email = req.body.email;
    try {
        const status = await Student.deleteOne({ email: email });
        if (status) { res.status(200).json({ message: "Student removed successfully" }) }

    } catch (err) {
        res.status(201).json({ message: "Error while removing student" })
    }
}

//--------remove a teacher---------
exports.removeteacher = async (req, res) => {
    try {
        let teacher = await Teacher.findOne(req.body);
        if (!teacher) {
            return res.status(404).send("Teacher not found");
        }
        await Teacher.deleteOne(teacher);
        res.status(200).send("Teacher removed successfully");

    } catch (err) {
        res.status(201).json({ message: "Error while removing Teacher" })
    }
}


exports.updatestudent = async (req, res) => {
    let { Email, stdName, stdEmail, stdMobile, stdDob, stdFatherName, stdClass, stdGender, stdAddress } = req.body;
    let student = await Student.findOne({ email: Email });
    if (!stdName) { stdName = student.username };
    if (!stdEmail) { stdEmail = student.email };
    if (!stdMobile) { stdMobile = student.mobile };
    if (!stdDob) { stdDob = student.dob };
    if (!stdFatherName) { stdFatherName = student.fatherName };
    if (!stdClass) { stdClass = student.standard }
    if (!stdGender) { stdGender = student.gender }
    if (!stdAddress) { stdAddress = student.address }

    const filter = { email: Email };
    const update = { username: stdName, email: stdEmail, mobile: stdMobile, dob: stdDob, fatherName: stdFatherName, gender: stdGender, address: stdAddress, standard: stdClass };
    try {
        await Student.findOneAndUpdate(filter, update);
    } catch (err) {
        res.status(404).json({ message: "Not found student" });
    }
}

exports.updateteacher = async (req, res) => {
    let { Email, tName, tEmail, tMobile, tFatherName, tSubject, tGender, tAddress, tSalary } = req.body;
    let student = await Teacher.findOne({ email: Email });
    if (!tName) { tName = student.username };
    if (!tEmail) { tEmail = student.email };
    if (!tMobile) { tMobile = student.mobile };
    if (!tSalary) { tSalary = student.dob };
    if (!tFatherName) { tFatherName = student.fatherName };
    if (!tSubject) { tSubject = student.standard }
    if (!tGender) { tGender = student.gender }
    if (!tAddress) { tAddress = student.address }

    const filter = { email: Email };
    const update = { username: tName, email: tEmail, mobile: tMobile, salary: tSalary, fatherName: tFatherName, gender: tGender, address: tAddress, subject: tSubject };
    try {
        await Teacher.findOneAndUpdate(filter, update);
    } catch (err) {
        res.status(404).json({ message: "Not found Teacher" });
    }
}