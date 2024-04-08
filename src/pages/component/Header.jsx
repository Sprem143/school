import { Link, Outlet } from "react-router-dom";
import './header.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useEffect, useState } from "react";
export default function Header() {
    const [cookie, setCookie] = useState();
    const c = document.cookie;
    useEffect(() => {
        if (c.slice(0, 8) == "director") {
            setCookie(c.slice(0, 8));
        } else if (c.slice(0, 7) == "teacher") {
            setCookie(c.slice(0, 7));
        } else if (c.slice(0, 7) == "student") {
            setCookie(c.slice(0, 7));
        }
    })
    return (
        <>
            <div className="header sb">
                <div className="logo-container dfdc ac">
                    <img src="/static/Prem.png" alt="Logo" className="logo" />
                    <p>School Name</p>
                </div>
                <div className="links-container">
                    <p><Link to="home">Home</Link></p>
                    <p><Link to="about">About</Link></p>
                    <p><Link to="exam">Exam</Link></p>
                    <p><Link to="notice">Notice</Link></p>

                    <p>
                        <DropdownButton id="dropdown-basic-button" title="Log in">
                            <Dropdown.Item >
                                {cookie == 'director' ? <Link to="/director/profile">Dashboard</Link> : <Link to="/director/login">Director</Link>}
                            </Dropdown.Item>
                            <Dropdown.Item >
                                {cookie == 'teacher' ? <Link to="/teacher/profile">Dashboard</Link> : <Link to="/teacher/login">Teacher</Link>}

                            </Dropdown.Item>
                            <Dropdown.Item >
                                {cookie == 'student' ? <Link to="/student/profile">Profile</Link> : <Link to="/student/login">Student</Link>}
                            </Dropdown.Item>
                        </DropdownButton>
                    </p>
                </div>
            </div>
            <Outlet />
        </>
    )
}