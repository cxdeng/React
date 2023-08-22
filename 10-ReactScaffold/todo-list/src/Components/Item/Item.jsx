import React, { Component } from 'react'
import item from './Item.module.css'

export default class Item extends Component {

  state = { mouse: false }

  render() {
    const { id, task, done } = this.props
    return (
      <li className={item.item} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label htmlFor="">
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{task}</span>
          <button onClick={this.handleDelete(id)} ref={currentNode => this.deleButton = currentNode} className={item['flex-right']}>Delete</button>
        </label>
      </li>
    )
  }

  // 鼠标移入移出的回调函数
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
      if (flag === true) {
        this.deleButton.style.display = 'block'
      } else {
        this.deleButton.style.display = 'none'
      }
    }
  }

  // 勾选，取消勾选todoItem的回调函数
  handleCheck = (id) => {
    return (event) => {
      console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked)
    }
  }

  // 删除一个todoItem的回调
  handleDelete = (id) => {
    return () => {
      if(window.confirm('Are you sure to delte this todo item ?')){
        this.props.deleteTodo(id)
      }
    }
  }
}
