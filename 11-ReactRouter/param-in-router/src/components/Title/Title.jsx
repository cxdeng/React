import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import title from './Title.module.css'

class Title extends Component {
  render() {
    console.log('Title', this.props);
    return (
      <div className={title['title-container']}>
        <h1>
          Head First React Router
        </h1>


        <button onClick={this.back}>Backword</button>
        <button onClick={this.forward}>Forword</button>
      </div>
    )
  }

  /* 
  一般组件没有history属性
*/
  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }
}

// 在一般组件中使用路由组件api的问题
export default withRouter(Title)
