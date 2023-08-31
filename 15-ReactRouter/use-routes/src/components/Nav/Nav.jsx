import React from 'react'
import { NavLink } from 'react-router-dom'
import nav from './Nav.module.css'

export default function Nav() {

    function computedClassName({isActive}){
        return isActive ? `${nav.selected} ${nav.link}` : nav.link
    }

    return (
        <div className={nav['nav-container']}>
            <NavLink className={computedClassName} to='/about'>About</NavLink>
            <NavLink className={computedClassName} to="/home">Home</NavLink>
        </div>
    )
}
