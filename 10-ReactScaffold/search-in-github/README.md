# Search Users in Github

## The Introduction of Project

Based on react, use Axios to send a request to Github's server to get user data and render the user's name, home page link, and avatar to the page.

## index.js
```jsx
// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入App组件
import App from './App'

// 渲染App组件到页面
ReactDOM.render(<App/>, document.querySelector('#root'))
```

## App.js
```jsx
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

```

## Important Components
### Search Component

```jsx
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
```

### List Component

```jsx
import React, { Component } from 'react'
import list from './List.module.css'
import picture from '../../img/Leslie.webp'

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props
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
```