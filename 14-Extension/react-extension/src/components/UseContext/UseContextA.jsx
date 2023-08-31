import React, { Component } from 'react'
import UseContextB from './UseContextB'
import { MyContext } from './MyContext'

export default class UseContextA extends Component {
  state = {
    username: 'JACK',
    age: 19
  }

  render() {
    const { username, age } = this.state
    return (
      <div className='parent'>
        <h2>This is UseContextA Component</h2>
        <h4>The username is {this.state.username}</h4>
        <MyContext.Provider value={{ username, age }}>
          <UseContextB />
        </MyContext.Provider>
      </div>
    )
  }
}
