import { Link } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


export default function DirectorProfile() {
    const navigate= useNavigate();
    const [students, setStudents] = useState([]);
    const [std, setStd] = useState('');
    const [stdName, setStdname] = useState('');
    const [stdEmail, setStdEmail] = useState('');
    const getStudents = async () => {
        let students = await fetch('http://localhost:8000/director/getAllStudents', {
            method: "GET",
            headers: { 'Content-type': 'application/json' }
        })
        students = await students.json();
        setStudents(students);
    }
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);

    }
    const handleShow = async (em) => {
        setShow(true);
        console.log(em)
        let std = await fetch('http://localhost:8000/director/getonestudent', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: em })
        })
        std = await std.json();
        console.log(std);
        setStd(std);

    }
    // ---change username-----
    const handleUpdate = async (email) => {
        setShow(false);
        let updatedstd = await fetch("http://localhost:8000/director/updatestudent", {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, stdName, stdEmail })
        })
        updatedstd = await updatedstd.json();
        if (updatedstd.email) {
            alert('Student details updated successfully')
        }
    }

const deleteStudent=async(email)=>{
    console.log(email)
    let status=await fetch('http://localhost:8000/director/removestudent',{
     method:"DELETE",
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({email:email})
    })
    status=await status.json();
    console.log(status.status)
    if(status.status==200){
        alert("student deleted")
    }else{
        alert("Error while deleting")
    }
}
// -----Log out ----
const logout=()=>{
    Cookies.remove('director');
    navigate('/');
}
    return (
        <>
            <h1>Welcome to Director Profile page</h1>
            <button> <Link to="/student/registration" >Add Student</Link> </button>
            <button> <Link to="/teacher/signup" >Add Teacher</Link> </button>
            <button onClick={getStudents}>get students</button>

            <button onClick={logout}>Log out</button>
            <ul>
                {
                    students.map((student) => (
                        <li key={student.email}>
                            <Accordion >
                                <Accordion.Item eventKey={student._id}>
                                    <Accordion.Header>
                                        {student.username}
                                        <Button variant="primary" onClick={() => handleShow(student.email)}>
                                            Update
                                        </Button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{std.username}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <form action="">
                                                    <label htmlFor="">Name</label>
                                                    <input type="text" onChange={(e) => setStdname(e.target.value)} placeholder={std.username} />
                                                    <label htmlFor="">Email</label>
                                                    <input type="text" onChange={(e) => setStdEmail(e.target.value)} placeholder={std.email} />

                                                </form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={() => handleUpdate(std.email)}>
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                         <button onClick={()=>deleteStudent(student.email)}>Delete</button>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <li> {student.email}</li>
                                        {student.createdAt.slice(0, 10)} <br />
                                        {student.updatedAt.slice(0, 10)}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                        </li>
                    ))
                }
            </ul>

        </>
    )
}