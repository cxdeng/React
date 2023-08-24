import React, { Component } from 'react'
import home from './Home.module.css'

export default class Home extends Component {
  render() {
    return (
      <div className={home['home-container']}>
        <h1>Home</h1>
      </div>
    )
  }
}
