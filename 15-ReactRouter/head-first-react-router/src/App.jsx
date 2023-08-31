import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Title from './components/Title/Title'
import Nav from './components/Nav/Nav'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import './App.css'

export default function App() {

    return (
        <div className='main'>
            <Title></Title>

            <div className='container'>
                <Nav></Nav>

                {/* 
                    注册路由: 单一匹配
                */}
                <Routes>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/' element={<Navigate to='/about' />}></Route>
                </Routes>
            </div>
        </div>
    )
}
