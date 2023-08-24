import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import nav from './Nav.module.css'

export default class Nav extends Component {
    render() {
        console.log('Nav', this.props);
        return (
            <div className={nav['nav-container']}>
                <Link className={nav['link-about', 'link']} to='/about'>About</Link>
                <Link className={nav['link-home', 'link']} to="/home">Home</Link>
            </div>
        )
    }
}