import React, { Component } from 'react'
import about from './About.module.css'

export default class About extends Component {
  render() {
    console.log('About', this.props);
    return (
      <div className={about['about-container']}>
        <h1>About</h1>
      </div>
    )
  }
}
