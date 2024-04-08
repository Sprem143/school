import { Link } from "react-router-dom";
import { useState } from "react";
export default function StudentProfile(){
    const [students, setStudents] = useState([]);
    const getStudents = async () => {
        let students = await fetch('http://localhost:8000/director/getAllStudents', {
            method: "GET",
            headers: { 'Content-type': 'application/json' }
        })
        students = await students.json();
        setStudents(students);
    }
    return(
        <>
        <div className="studentProfile"></div>
          {

          }
        </>
    )
}