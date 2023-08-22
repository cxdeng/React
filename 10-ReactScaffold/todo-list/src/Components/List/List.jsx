import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item'
import list from './List.module.css'

export default class List extends Component {

  // 对接收的props进行: 类型，必须性的限制
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  render() {
    const { todoList, updateTodo, deleteTodo } = this.props
    console.log(todoList);
    return (
      <ul className={list.list}>
        {
          todoList.map(todoItem => {
            console.log(todoItem);
            console.log(todoItem.id, '@');
            return <Item key={todoItem.id} {...todoItem} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          })
        }
      </ul>
    )
  }
}
