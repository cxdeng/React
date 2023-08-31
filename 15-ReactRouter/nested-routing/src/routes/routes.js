import About from "../pages/About/About"
import Home from "../pages/Home/Home"
import { Navigate } from 'react-router-dom'
/* 
    路由表
*/
const routeTable = [
    {
        path: '/about',
        element: <About />
    },

    {
        path: '/home',
        element: <Home />
    },

    {
        path: '/',
        element: <Navigate to='/about' />
    }
]

export default routeTable