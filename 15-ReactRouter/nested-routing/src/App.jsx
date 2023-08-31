import React from 'react'
import { useRoutes } from 'react-router-dom'
import Title from './components/Title/Title'
import Nav from './components/Nav/Nav'
import routes from './routes/routes'
import './App.css'

export default function App() {

    /* 
        路由表
    */
    // const routeTable = useRoutes(
    //     [
    //         {
    //             path: '/about',
    //             element: <About />
    //         },

    //         {
    //             path: '/home',
    //             element: <Home />
    //         },

    //         {
    //             path: '/',
    //             element: <Navigate to='/about' />
    //         },

    //     ]
    // )

    const routeTable = useRoutes(routes)

    return (
        <div className='main'>
            <Title></Title>

            <div className='container'>
                <Nav></Nav>

                {/* 
                    注册路由: 单一匹配
                */}
                {/* <Routes>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/' element={<Navigate to='/about' />}></Route>
                </Routes> */}

                {/* 
                    注册路由: 路由表
                */}
                {routeTable}
            </div>
        </div>
    )
}
