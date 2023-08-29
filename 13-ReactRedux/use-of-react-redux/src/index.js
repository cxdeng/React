import React from "react";
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App />, document.querySelector('#root'))

// 检测redux中状态的改变，若redux中的状态发生了改变，则重新渲染App组件
store.subscribe(()=>{
    ReactDOM.render(<App />, document.querySelector('#root'))
})