import './App.css'

import Login from './components/Login'
import Regster from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'

import api from './api'
import ProtectedRoutes from './components/ProtectedRoutes'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
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
                <Route path='/logot' element={<Logout />} />
                <Route path='/register' element={<RegisterAndLogout />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
