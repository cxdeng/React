import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action_creator'
import count from './Count.module.css'

class Count extends Component {
  render() {
    return (
      <div className={count['count-container']}>
        <h1>当前求和为: {this.props.sum}</h1>
        <button onClick={this.add}>Click to Add</button>
        <button onClick={this.minus}>Click to Minus</button>
        <button onClick={this.asyncAdd}>Click to async Add</button>
      </div>
    )
  }

  add = () => {
    this.props.increment(1)
  }

  minus = () => {
    this.props.decrement(1)
  }

  asyncAdd = ()=> {
    this.props.asyncIncrement(1, 500)
  }
}

export default connect(
  // 映射状态
  state => ({ sum: state }),
  // 映射状态的操作
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    asyncIncrement: createIncrementAsyncAction
  }
)(Count)
