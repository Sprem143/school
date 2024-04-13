import { Link } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './director.scss'
import Carousel from 'react-multi-carousel';
// import carouselStyle from 'n'
import 'react-multi-carousel/lib/styles.css';

export default function DirectorProfile() {


    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [std, setStd] = useState('');
    const [stdName, setStdname] = useState('');
    const [stdEmail, setStdEmail] = useState('');
    const getStudents = async () => {
        let students = await fetch('http://localhost:8050/director/getAllStudents', {
            method: "GET",
            headers: { 'Content-type': 'application/json' }
        })
        students = await students.json();
        setStudents(students);
    }
    // -----get teachers list

    const getteachers = async () => {
        let teachers = await fetch('http://localhost:8050/director/getallteachers', {
            method: "GET",
            headers: { 'Content-type': 'application/json' }
        })
        teachers = await teachers.json();
        setTeachers(teachers);
    }


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);

    }
    const handleShow = async (em) => {
        setShow(true);
        console.log(em)
        let std = await fetch('http://localhost:8050/director/getonestudent', {
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
        let updatedstd = await fetch("http://localhost:8050/director/updatestudent", {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, stdName, stdEmail })
        })
        updatedstd = await updatedstd.json();
        if (updatedstd.email) {
            alert('Student details updated successfully')
        }
    }

    const deleteStudent = async (email) => {
        console.log(email)
        let status = await fetch('http://localhost:8050/director/removestudent', {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
        status = await status.json();
        console.log(status.status)
        if (status.status == 200) {
            alert("student deleted")
        } else {
            alert("Error while deleting")
        }
    }
    // -----Log out ----
    const logout = () => {
        Cookies.remove('director');
        navigate('/');
    }
    return (
        <>
           <div className="df dfdr">
                <img src="/static/Prem.png" alt="Profile" className="director-img" />
                <div className="dfdc jcac" style={{ flexBasis: "60%" }}>
                    <h2><b>Mr Prem Kumar</b></h2>
                    <p>Role: Director of school</p>
                </div>
                <button className="btn btn-primary ms-4" onClick={logout}>Log out</button>

            </div>
            {/* ------------Teacher related operation---------------- */}
            <section className="dfdr jcac">

            
            <div className="teacher_sec dfdc jcac">
                <h1 className="text-danger"><b>Teacher</b></h1>
                <div className="dfdr jcac tchr">
                    <div className="teacher_img ">
                        <img src="/static/teacher.png" alt="Teacher logo" />
                    </div>
                    <div className="teacher_action dfdc">
                        <Link to="/teacher/signup"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-plus me-3" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                        </svg> Add New Teacher</Link>
                        <Link><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg> Update Teacher's Details</Link>
                        <Link onClick={getteachers}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-card-list me-3" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                        </svg> All Teachers List</Link>
                        <Link><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search me-3 " viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg> Search a Teacher</Link>
                        <input type="text" className="mt-2 p-1" placeholder="Enter teacher's name" />
                        <button className="btn btn-primary mt-2">Search</button>
                    </div>
                </div>
            </div>
            </section>
            {/* --------------student related operations ---------------- */}
             <section className="dfdr jcac">

             
            <div className="student_sec dfdc jcac mb-4">
                <h1 className="text-danger"><b> STUDENT</b></h1>
                <div className="dfdr jcac tchr">
                    <div className="teacher_img">
                        <img src="/static/student1.avif" alt="Teacher logo" />
                    </div>
                    <div className="teacher_action dfdc">
                        <Link to="/student/signup"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-plus me-3" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                        </svg> Add New Student</Link>
                        <Link><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-3 bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg> Update Student's Details</Link>
                        <Link onClick={getStudents}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-card-list me-3" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                        </svg> All Students List</Link>
                        <Link><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search me-3 " viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg> Search a Student</Link>
                        <input type="text" className="mt-2 p-1" placeholder="Enter student's name" />
                        <button className="btn btn-primary mt-2">Search</button>
                    </div>
                </div>
            </div>
            </section>
            <ol>
                {
                    students.map((student) => (
                        <li key={student.email}>
                            <Accordion >
                                <Accordion.Item eventKey={student._id}>
                                    <Accordion.Header>
                                       <div className="dfdr student_table">
                                      <p> {student.username}</p>
                                        <a variant="primary" onClick={() => handleShow(student.email)}>Update  </a>
                                        <a onClick={() => deleteStudent(student.email)}>Delete</a>
                                       </div>

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
                                    </Accordion.Header>
                                    <Accordion.Body>
                                       <div className="dfdc jcac std_details">
                                        <h2>{std.username}</h2>
                                        <div className="dfdr jcac std_container">
                                            <div className="std_photo">
                                                <img src="/static/Prem.png" alt="student photo" height="200" />
                                            </div>
                                            <div className="std_data">
                                         <table border={1}>
                                            <tbody>
                                                <tr >
                                                    <td >Class</td>
                                                    <td>10th</td>
                                                </tr>
                                                <tr >
                                                    <td >Gender</td>
                                                    <td>Male</td>
                                                </tr>
                                                <tr >
                                                    <td >DOB</td>
                                                    <td>22/02/1999</td>
                                                </tr>
                                                <tr >
                                                    <td >Father's Name</td>
                                                    <td>Prakash Mandal</td>
                                                </tr>
                                                <tr >
                                                    <td >Mother's Name</td>
                                                    <td>Neelam Devi</td>
                                                </tr>
                                                <tr >
                                                    <td >Contact Number</td>
                                                    <td>7366943700</td>
                                                </tr>
                                                <tr >
                                                    <td >Email</td>
                                                    <td>{std.email}</td>
                                                </tr>
                                                <tr >
                                                    <td >Address</td>
                                                    <td>Hariraha</td>
                                                </tr>
                                            </tbody>
                                         </table>
                                                
                                            </div>
                                        </div>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </li>
                    ))
                }
            </ol>
           {/* -----------teachers list will be shown here */}

           <ol>
                {
                    teachers.map((teacher) => (
                        <li key={teacher._id}>
                            <Accordion >
                                <Accordion.Item eventKey={teacher._id}>
                                    <Accordion.Header>
                                       <div className="dfdr student_table">
                                      <p> {teacher.username}</p>
                                        <a variant="primary" onClick={() => handleShow(student.email)}>Update  </a>
                                        <a onClick={() => deleteStudent(student.email)}>Delete</a>
                                       </div>

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
                                    </Accordion.Header>
                                    <Accordion.Body>
                                       <div className="dfdc jcac std_details">
                                        <h2>{std.username}</h2>
                                        <div className="dfdr jcac std_container">
                                            <div className="std_photo">
                                                <img src={teacher.image} alt="student photo" height="200" />
                                            </div>
                                            <div className="std_data">
                                         <table border={1}>
                                            <tbody>
                                                <tr >
                                                    <td >Mobile Number : </td>
                                                    <td>{teacher.mobile}</td>
                                                </tr>
                                                <tr >
                                                    <td >Email : </td>
                                                    <td>{teacher.email}</td>
                                                </tr>
                                                <tr >
                                                    <td >Gender</td>
                                                    <td>{teacher.gender}</td>
                                                </tr>
                                                <tr >
                                                    <td >Address : </td>
                                                    <td>{teacher.address}</td>
                                                </tr>
                                                <tr >
                                                    <td >Father's Name : </td>
                                                    <td>{teacher.fatherName}</td>
                                                </tr>
                                                <tr >
                                                    <td >Subject : </td>
                                                    <td>{teacher.subject}</td>
                                                </tr>
                                                <tr >
                                                    <td >Qualification : </td>
                                                    <td>{teacher.qualification}</td>
                                                </tr>
                                                <tr >
                                                    <td >Salary : </td>
                                                    <td>{teacher.salary}</td>
                                                </tr>
                                                <tr >
                                                    <td >Joining Date : </td>
                                                    <td>{teacher.createdAt.slice(0,10)}</td>
                                                </tr>
    
                                               
                                               
                                            </tbody>
                                         </table>
                                                
                                            </div>
                                        </div>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </li>
                    ))
                }
            </ol>
           

        </>
    )
}