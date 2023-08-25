import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import nav from '../Nav/Nav.module.css'
import homeNav from '../HomeNav/HomeNav.module.css'


export default class MyNavLink extends Component {
    render() {
        console.log("MyNavLink", this.props);
        return (
            <div>
                <NavLink activeClassName={nav.selected} {...this.props} />
            </div>
        )
    }
}
