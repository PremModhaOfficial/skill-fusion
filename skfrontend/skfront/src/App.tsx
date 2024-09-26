
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
<<<<<<< HEAD
import Hackout from './components/Hackout'



=======
import ProtectedRoutes from './components/ProtectedRoutes'
import { makeRegiserRequest } from './api'
>>>>>>> 5072da1dd852c2ac8939cf1413d8673b22886c7c
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
<<<<<<< HEAD
        // <BrowserRouter>
        //     <Routes>
        //         <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        //         <Route path='/login' element={<Login />} />
        //         <Route path='/logout' element={<Logout />} />
        //         <Route path='/register' element={<RegisterAndLogout />} />
        //         <Route path='/educatorForm' element={<EduForm1 />} />
        //         <Route path='/educator' element={<Educator />} />
        //         <Route path='/student' element={<UserProfile />} />
        //         <Route path='/contactus' element={<ContactUs />} />
        //         <Route path='/school' element={<School />} />
        //         <Route path='*' element={<NotFound />} />
        //     </Routes>
        //     <Footer />
        // </BrowserRouter>

        <><Hackout /></>
        
=======
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contactus' element={<ContactUs />} />
                {/* <Route path='/educator' element={<Educator />} /> */}
                <Route path='/educator' element={<ProtectedRoutes><Educator /></ProtectedRoutes>} />
                <Route path='/educatorForm' element={<EducatorForm />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/register' element={<RegisterAndLogout />} />
                <Route path='/school' element={<School />} />
                <Route path='/search' element={<NotFound />} />
                <Route path='/student' element={<UserProfile />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>

>>>>>>> 5072da1dd852c2ac8939cf1413d8673b22886c7c
    )
}

export default App
