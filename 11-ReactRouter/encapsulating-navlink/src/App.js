import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Title from './components/Title/Title'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='main'>
        <Title></Title>

        <div className='container'>
          <Nav></Nav>

          {/* 注册路由 */}
          <Switch>
            <Route path='/about' component={About}></Route>
            <Route path='/home' component={Home}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
