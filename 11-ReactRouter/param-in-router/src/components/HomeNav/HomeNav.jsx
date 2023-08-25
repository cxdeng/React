import React, { Component } from 'react'
import homeNav from './HomeNav.module.css'
import MyNavLink from '../MyNavLink/MyNavLink'

export default class HomeNav extends Component {
  render() {
    return (
      <div className={homeNav['homeNav-container']}>
        
        <MyNavLink className={homeNav.news} to='/home/news'>News</MyNavLink>
        <MyNavLink className={homeNav.message} to='/home/message'>Message</MyNavLink>
        
      </div>
    )
  }
}
