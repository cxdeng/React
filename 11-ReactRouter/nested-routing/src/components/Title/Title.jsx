import React, { Component } from 'react'
import title from './Title.module.css'

export default class Title extends Component {
  render() {
    console.log('Title', this.props);
    return (
      <div className={title['title-container']}>
        <h1>
          Head First React Router
        </h1>
      </div>
    )
  }
}
