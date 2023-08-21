// 创建‘外壳’组件
import React from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'

// 创建并导出App组件
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}