import React from 'react'
import './App.css'
import EduForm1 from './components/EduForm1'

import UserProfile from './components/UserProfile'
import Login from './components/Login'
import SignUp from './components/SignUp'


function App() {
    return (
        <div>
            <EduForm1 />
            <UserProfile />
            <Login />
            <SignUp />
        </div>
    )
}

export default App
