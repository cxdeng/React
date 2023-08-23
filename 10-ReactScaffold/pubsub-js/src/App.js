import React, { Component } from 'react'
import Search from './Components/Search/Search'
import List from './Components/List/List'
import app from './App.css'

export default class App extends React.Component{

  /* 
    Init state
    The initial value of users is empty array 
  */
  state = {
    users: [],
    // 是否为第一次打开页面
    isFirst: true,
    // 是否处于加载中
    isLoading: false,
    // 存储请求相关的错误信息
    err: '',
  }

  render() {
    return (
      <div className='container'>
        <Search updateAppState={this.updateAppState} ></Search>
        <List {...this.state}></List>
      </div>
    )
  }

  // 更新App组件的state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
}
