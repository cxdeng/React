# pubsub-js

This project aims to use pubsub-js in search user in github.

## What is pubsub-js

**pubsub-js** is a popular implementation of the publish-subscribe pattern (pub/sub) which can be used in React apps to facilitate communication between components, especially those that aren't directly related.

## How to install pubsub-js
```bash
npm install pubsub-js
```

## How to use pubsub-js in components

### Components that need to publish messages.

```jsx
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
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(
        response => {
          // 请求成功后，通知List组件更新状态
          console.log(response.data);
          PubSub.publish('list-info', { isLoading: false, users: response.data.items })
        },
        error => {
          // 请求失败后，通知List组件更新状态
          console.log(error);
          PubSub.publish('list-info', { isLoading: false, err: error.message })
        }
      )
  }
}
```


### Components that subscribe to messages

```jsx
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
    ...
  }
}
```