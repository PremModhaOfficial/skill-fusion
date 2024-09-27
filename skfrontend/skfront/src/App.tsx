import Login from './components/Login'
import Regster from './components/Register'
import NotFound from './components/NotFound'
import EducatorForm from './components/EduForm1'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import School from './components/School'
import StudentProfile from './components/UserProfile'
import ProtectedRoutes from './components/ProtectedRoutes'
import { makeRegiserRequest } from './api'
import MyCourses from './components/MyCourse'

import { createContext, useState } from 'react'
import EducatorRout from './components/RedirectEducator'
import CourseDetail from './components/CourseBackup'
import DB from './assets/DB.webp'

function Logout() {
    localStorage.clear()
    return <Navigate to="/" />
}

function RegisterAndLogout() {
    localStorage.clear()
    return (<Regster handleSubmit={makeRegiserRequest} />)
}


let CourseContext = createContext<any>(undefined)

function App() {

    let useCourse = useState({
        title: "Drone Building",
        instructor: "Dinesh Sain",
        rating: 5,
        numRatings: 2,
        verified: true,
        classes: 7,
        price: 750,
        image: DB,
    }
    )

    return (

        <CourseContext.Provider value={useCourse} >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contactus' element={<ContactUs />} />
                    <Route path='/educator' element={<EducatorRout />} />
                    <Route path='/educator/form' element={<ProtectedRoutes><EducatorForm /></ProtectedRoutes >} />
                    <Route path='/educator/dashboard' element={<ProtectedRoutes><MyCourses /></ProtectedRoutes >} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/register' element={<RegisterAndLogout />} />
                    <Route path='/course-details' element={<CourseDetail {...useCourse[0]} />} />
                    <Route path='/school' element={<School />} />
                    <Route path='/student' element={<ProtectedRoutes><StudentProfile /></ProtectedRoutes>} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </CourseContext.Provider >
    )
}

export default App

export { CourseContext }
