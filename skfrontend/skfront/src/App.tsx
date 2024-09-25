
import Login from './components/Login'
import Regster from './components/Register'
import NotFound from './components/NotFound'
import EduForm1 from './components/EduForm1'

import ProtectedRoutes from './components/ProtectedRoutes'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import Home from './components/Home'
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
                <Route path='/student' element={<EduForm1 />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
