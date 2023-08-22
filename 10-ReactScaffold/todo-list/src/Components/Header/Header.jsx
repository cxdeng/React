import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import header from './Header.module.css'

console.log(nanoid());
console.log(nanoid());
console.log(nanoid());

export default class Header extends Component {

  // 对接收的props进行: 类型，必须性的限制
  static propTypes = {
    addTodoItem: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className={header['todo-header']}>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder='Input task name, Enter to confirm' />
      </div>
    )
  }

  // 键盘事件的回调函数
  handleKeyUp = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    if(event.target.value.trim() === ''){
      alert('Input can not be empty.')
      return
    }

    const todoObj = { id: nanoid(), task: event.target.value, done: false }
    this.props.addTodoItem(todoObj)

    // 清空输入
    event.target.value = ''
  }
}
