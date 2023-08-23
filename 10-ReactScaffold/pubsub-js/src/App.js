import React, { Component } from 'react'
import Search from './Components/Search/Search'
import List from './Components/List/List'
import app from './App.css'

export default class App extends React.Component{

  render() {
    return (
      <div className='container'>
        <Search></Search>
        <List {...this.state}></List>
      </div>
    )
  }
}
