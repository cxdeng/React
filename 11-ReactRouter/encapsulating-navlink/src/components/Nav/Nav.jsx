import React, { Component } from 'react'
import MyNavLink from '../MyNavLink/MyNavLink';
import { NavLink, Link } from 'react-router-dom'
import nav from './Nav.module.css'

export default class Nav extends Component {
    render() {
        return (
            <div className={nav['nav-container']}>
                {/* 标签体内容属于一个特殊的属性， key为children */}
                <MyNavLink to="/about" title='About'>About</MyNavLink>
                <MyNavLink to="/home" title='Home'>Home</MyNavLink>
            </div>
        )
    }
}