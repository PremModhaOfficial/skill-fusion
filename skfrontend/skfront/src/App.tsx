
import Login from './components/Login'
import Regster from './components/Register'
import NotFound from './components/NotFound'
import EduForm1 from './components/EduForm1'

import ProtectedRoutes from './components/ProtectedRoutes'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import LatestReleases from './components/LatestReleases'
import School from './components/School'
import UserProfile from './components/UserProfile'
import Educator from './components/Educator'
function Logout() {
    localStorage.clear()
    return <Navigate to="/login" />
}

function RegisterAndLogout() {
    localStorage.clear()
    return (<Regster />)
}
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/register' element={<RegisterAndLogout />} />
                <Route path='/educatorForm' element={<EduForm1 />} />
                <Route path='/educator' element={<Educator />} />
                <Route path='/student' element={<UserProfile />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/school' element={<School />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <LatestReleases />
            <Footer />
        </BrowserRouter>
    )
}

export default App
