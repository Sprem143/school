import { useState } from 'react'
import './App.css'
import { Route,BrowserRouter, Routes } from 'react-router-dom';
import Header from './pages/component/Header';
import Home from './pages/Home';
import StdSignup from './pages/StdSignup';
import DirectorProfile from './pages/Director/DirectorProfile';
import TeacherLogin from './pages/Teacher/TeacherLogin';
import TeacherProfile from './pages/Teacher/TeacherProfile';
import DirectorLogin from './pages/Director/DirectorLogin';
import StudentRegistration from './pages/student/StudentRegistration';
import TeacherSignup from './pages/Teacher/TeacherSignup';
export default function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home/>}></Route>
        <Route path='/student/signup' element={<StudentRegistration/>} />
        <Route path='/director/login' element={<DirectorLogin/>} />
        <Route path='/director/profile' element={<DirectorProfile/>} />
        <Route path='/teacher/profile' element={<TeacherProfile/>} />
        <Route path='/teacher/login' element={<TeacherLogin/>} />
        <Route path='/teacher/signup' element={<TeacherSignup/>} />
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

