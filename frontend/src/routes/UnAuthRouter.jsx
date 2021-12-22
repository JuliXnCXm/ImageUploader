import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Auth from '../pages/Auth'
import Register from '../pages/Register'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

const UnAuthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default UnAuthRouter
