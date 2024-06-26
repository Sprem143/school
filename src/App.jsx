import { useState } from 'react'
import './App.css'
import { Route,BrowserRouter, Routes } from 'react-router-dom';
import Header from './pages/component/Header';
import Home from './pages/Home';
import DirectorProfile from './pages/Director/DirectorProfile';
import TeacherLogin from './pages/Teacher/TeacherLogin';
import DirectorLogin from './pages/Director/DirectorLogin';
import StudentRegistration from './pages/student/StudentRegistration';
import TeacherSignup from './pages/Teacher/TeacherSignup';
import StudentLogin from './pages/student/StudentLogin';
export default function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home/>}></Route>

        <Route path='/student/signup' element={<StudentRegistration/>} />
        <Route path='/student/login' element={<StudentLogin/>} />

        <Route path='/director/login' element={<DirectorLogin/>} />
        <Route path='/director/profile' element={<DirectorProfile/>} />

        <Route path='/teacher/login' element={<TeacherLogin/>} />
        <Route path='/teacher/signup' element={<TeacherSignup/>} />
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

