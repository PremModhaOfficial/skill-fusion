
import Login from './components/Login'
import Regster from './components/Register'
import NotFound from './components/NotFound'
import EducatorForm from './components/EduForm1'

import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import School from './components/School'
import UserProfile from './components/UserProfile'
import Educator from './components/Educator'
import ProtectedRoutes from './components/ProtectedRoutes'
import { makeRegiserRequest } from './api'
import MyCourses from './components/MyCourse'
import CreateCourse from './components/CreateCourse'
function Logout() {
    localStorage.clear()
    return <Navigate to="/" />
}

function RegisterAndLogout() {
    localStorage.clear()
    return (<Regster handleSubmit={makeRegiserRequest} />)
}

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contactus' element={<ContactUs />} />
                {/* <Route path='/educator' element={<Educator />} /> */}
                <Route path='/educator' element={<ProtectedRoutes><Educator /></ProtectedRoutes>} />
                <Route path='/educatorForm' element={<ProtectedRoutes><EducatorForm /></ProtectedRoutes >} />
                <Route path='/educator/createCourse' element={<ProtectedRoutes><CreateCourse /></ProtectedRoutes >} />
                <Route path='/educator/dashboard' element={<ProtectedRoutes><MyCourses /></ProtectedRoutes >} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/register' element={<RegisterAndLogout />} />
                <Route path='/school' element={<School />} />
                <Route path='/search' element={<NotFound />} />
                <Route path='/student' element={<UserProfile />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
