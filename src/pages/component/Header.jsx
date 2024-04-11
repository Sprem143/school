// import { Link, Outlet } from "react-router-dom";
// import './header.scss';
// 
// import { useEffect, useState } from "react";

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// export default function Header() {
//     const [cookie, setCookie] = useState();
//     const c = document.cookie;
//     useEffect(() => {
//         if (c.slice(0, 8) == "director") {
//             setCookie(c.slice(0, 8));
//         } else if (c.slice(0, 7) == "teacher") {
//             setCookie(c.slice(0, 7));
//         } else if (c.slice(0, 7) == "student") {
//             setCookie(c.slice(0, 7));
//         }
//     })
//     return (
//         <>
//             <div className="header sb">
//                 <div className="logo-container dfdc ac">
//                     <img src="/static/Prem.png" alt="Logo" className="logo" />
//                     <p>School Name</p>
//                 </div>
//                 <div className="links-container">
//                     <div className=" hd d-flex justify-content-center">
//                         <p><Link to="home hd">Home</Link></p>
//                         <p><Link to="courses hd">Courses</Link></p>
//                         <p><Link to="courses hd">Our Teachers</Link></p>
//                         <p><Link to="courses hd">Courses</Link></p>
//                         <p><Link to="about">About</Link></p>
//                         <p><Link to="exam">Exam</Link></p>
//                         <p><Link to="notice">Notice</Link></p>
//                     </div>
//                     <div className="d-flex">
//                     <p>
//                         <DropdownButton id="dropdown-basic-button" title="Log in">
//                             <Dropdown.Item >
//                                 {cookie == 'director' ? <Link to="/director/profile">Dashboard</Link> : <Link to="/director/login">Director</Link>}
//                             </Dropdown.Item>
//                             <Dropdown.Item >
//                                 {cookie == 'teacher' ? <Link to="/teacher/profile">Dashboard</Link> : <Link to="/teacher/login">Teacher</Link>}

//                             </Dropdown.Item>
//                             <Dropdown.Item >
//                                 {cookie == 'student' ? <Link to="/student/profile">Profile</Link> : <Link to="/student/login">Student</Link>}
//                             </Dropdown.Item>
//                         </DropdownButton>
//                     </p>
//                     {/*        mobile view ---------- */}
//         <p>
//                     {[false].map((expand) => (
//                         <Navbar key={expand} expand={expand} className="mb-3">
//                             <Container fluid>
//                                 <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//                                 <Navbar.Offcanvas
//                                     id={`offcanvasNavbar-expand-${expand}`}
//                                     aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                                     placement="end"
//                                 >
//                                     <Offcanvas.Header closeButton>
//                                         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                                             Hello User
//                                         </Offcanvas.Title>
//                                     </Offcanvas.Header>
//                                     <Offcanvas.Body>
//                                     </Offcanvas.Body>
//                                 </Navbar.Offcanvas>
//                             </Container>
//                         </Navbar>
//                     ))}
//   </p>
//                     </div>
//                 </div>
//             </div>
//             <Outlet />
//         </>
//     )
// }

import { Link, Outlet } from "react-router-dom";
import './header.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src="/static/Prem.png" alt="" height="50" />
            </Navbar.Brand>
            <Link to="" className="text-white nav-links hd">Home</Link>
            <Link to="" className="text-white nav-links hd">Cources</Link>
            <Link to="" className="text-white nav-links hd">Our Teacher</Link>
            <Link to="" className="text-white nav-links hd">Admission</Link>
            <Link to="" className="text-white nav-links hd">Notice</Link>
            {/* ----log in button */}
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


            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='bg-light' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Hello User
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Courses</Nav.Link>
                  <Nav.Link href="#action2">Our Teachers</Nav.Link>
                  <Nav.Link href="#action2">Admission</Nav.Link>
                  <Nav.Link href="#action2">Notice</Nav.Link>                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet/>
    </>
  );
}

