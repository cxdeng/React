import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import nav from './Nav.module.css'

export default class Nav extends Component {
    render() {
        console.log('Nav', this.props);
        return (
            <div className={nav['nav-container']}>
                <NavLink activeClassName={nav.selected} className={nav.link} to='/about'>About</NavLink>
                <NavLink activeClassName={nav.selected} className={nav.link} to="/home">Home</NavLink>
            </div>
        )
    }
}