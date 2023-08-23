import React, { Component } from 'react'
import axios from 'axios'
import search from './Search.module.css'

export default class Search extends Component {
  render() {
    return (
      <div className={search['search-container']}>
        <h1>Search Users in Github</h1>
        <div>
          <input ref={cur => this.keywordElem = cur} type="text" placeholder='Enter User Name' />
          <button onClick={this.search}>Search</button>
        </div>
      </div>
    )
  }

  search = () => {
    // 获取用户的输入
    const { value: keyword } = this.keywordElem
    // 发送请求前,通知App组件更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true })
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(
        response => {
          // 请求成功后，通知App组件更新状态
          console.log(response.data);
          this.props.updateAppState({isLoading: false, users: response.data.items})
        },
        error => {
          // 请求失败后，通知App组件更新状态
          console.log(error);
          this.props.updateAppState({isLoading: false, err: error.message})
        }
      )
  }
}
