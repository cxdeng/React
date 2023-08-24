import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Title from './components/Title/Title'
import Nav from './components/Nav/Nav'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'

export default class App extends Component {
  render() {
    return (
      <div className='main'>
        <Title></Title>

        <div className='container'>
          <Nav></Nav>

          {/* 注册路由 */}
            <Route path='/about' component={About}></Route>
            <Route path='/home' component={Home}></Route>
        </div>
      </div>
    )
  }
}
