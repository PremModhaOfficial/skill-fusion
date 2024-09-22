import React from 'react'
import './App.css'
import Educator from './components/Educator'
import { BrowserRouter, Routes, Route, Navigation } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

function App() {
    return (
        <div>
            <Educator />
        </div>
    )
}

export default App
