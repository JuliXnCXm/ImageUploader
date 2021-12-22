import React from 'react'
import {Route , Routes} from 'react-router-dom';
import Home from '../pages/Home'
import Photo from '../pages/Photo';

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user/photo/upload/:id" element={<Photo/>}/>
        </Routes>
    )
}

export default AuthRouter
