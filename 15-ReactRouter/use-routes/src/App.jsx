import React from 'react'
import { useRoutes } from 'react-router-dom'
import Title from './components/Title/Title'
import Nav from './components/Nav/Nav'
import routes from './routes/routes'
import './App.css'

export default function App() {

    const routeTable = useRoutes(routes)

    return (
        <div className='main'>
            <Title></Title>

            <div className='container'>
                <Nav></Nav>

                {/* 
                    注册路由: 路由表
                */}
                {routeTable}
            </div>
        </div>
    )
}
