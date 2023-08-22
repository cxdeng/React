import React, { Component } from 'react'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Footer from './Components/Footer/Footer'
import './App.css'

export default class App extends React.Component {

  // 初始化状态
  state = {
    todoList: [
      // { id: '001', task: 'Task1', done: true },
      // { id: '002', task: 'Task2', done: true },
      // { id: '003', task: 'Task3', done: false },
    ]
  }

  render() {
    const { todoList } = this.state
    return (
      <div className='container'>
        <Header addTodoItem={this.addTodoItem} />
        <List todoList={todoList} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todoList={todoList} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
      </div>
    )
  }

  // 用于接受一个todoItem, 接收参数是一个todo对象
  addTodoItem = (todoObj) => {
    console.log('App', todoObj);
    // 获取原todoList
    const { todoList } = this.state
    // 追加一个todoItem
    const newTodoList = [todoObj, ...todoList]
    this.setState({ todoList: newTodoList })
  }

  // 更新todo对象
  updateTodo = (id, done) => {
    // 获取原todoList
    const { todoList } = this.state

    const newTodoList = todoList.map((todoItem) => {
      if (todoItem.id === id)
        return { ...todoItem, done }
      else
        return todoItem
    })

    this.setState({ todoList: newTodoList })
  }

  // 删除一个todoItem
  deleteTodo = (id) => {
    // 获取原todoList
    const { todoList } = this.state
    // 删除指定id的todo对象
    const newTodoList = todoList.filter((todoItem) => {
      return todoItem.id !== id
    })

    this.setState({ todoList: newTodoList })
  }


  // 全选
  checkAllTodo = (isDone) => {
    // 获取原todoList
    const { todoList } = this.state

    const newTodoList = todoList.map((todoItem) => {
      return { ...todoItem, done: isDone }
    })

    this.setState({ todoList: newTodoList })
  }

  // 清除所有已完成
  clearAllDone = () => {
    // 获取原todoList
    const { todoList } = this.state

    const newTodoList = todoList.filter((todoItem => {
      return !todoItem.done
    }))

    this.setState({ todoList: newTodoList })
  }

}