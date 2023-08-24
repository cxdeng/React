import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
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

    // 发送请求前,通知List组件更新状态
    PubSub.publish('list-info', { isFirst: false, isLoading: true })

    // 发送网络请求
    // axios.get(`https://api.github.com/search/users?q=${keyword}`)
    //   .then(
    //     response => {
    //       // 请求成功后，通知List组件更新状态
    //       console.log(response.data);
    //       PubSub.publish('list-info', { isLoading: false, users: response.data.items })
    //     },
    //     error => {
    //       // 请求失败后，通知List组件更新状态
    //       console.log(error);
    //       PubSub.publish('list-info', { isLoading: false, err: error.message })
    //     }
    //   )

    // 使用fetch发送网络请求
    fetch(`https://api.github.com/search/users?q=${keyword}`)
      .then(
        response => {
          // 请求成功后，通知List组件更新状态
          console.log('Connect Server Successfully');
          return response.json()
        },
        // error => {
        //   // 请求失败后，通知List组件更新状态
        //   console.log('Fail to connect Server');
        //   return new Promise(() => { })
        // }
      ).then(
        response => {
          console.log('获取数据成功', response);
          PubSub.publish('list-info', { isLoading: false, users: response.items })
        },
        // error => {
        //   console.log('获取数据失败', error);
        //   PubSub.publish('list-info', { isLoading: false, err: error.message })
        // }
      ).catch(
        error => {
          console.log('获取数据失败', error);
          PubSub.publish('list-info', { isLoading: false, err: error.message })
        }
      )
  }
}
