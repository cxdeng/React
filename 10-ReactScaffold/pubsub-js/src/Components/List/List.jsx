import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import list from './List.module.css'

export default class List extends Component {

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

    componentDidMount(){
      this.token = PubSub.subscribe('list-info', (msg, stateObj)=>{
        this.setState(stateObj)
      })
    }

    componentWillUnmount(){
      PubSub.unsubscribe(this.token)
    }

  render() {
    const { users, isFirst, isLoading, err } = this.state
    if (isFirst) {
      return (
        <h2>Input username and search</h2>
      )
    } else if (isLoading) {
      return (
        <h2>Loading</h2>
      )
    } else if (err) {
      return (
        <h2>{err}</h2>
      )
    } else {
      return (
        <div className={list['list-container']}>
          {
            users.map((userItem) => {
              return (
                <div key={userItem.id} className={list.card}>
                  <a href={userItem.html_url}>
                    <img src={userItem.avatar_url} alt="avatar" />
                  </a>
                  <div>{userItem.login}</div>
                </div>
              )
            })
          }
        </div>
      )
    }

  }
}
