import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import home from './Home.module.css'
import HomeNav from '../../components/HomeNav/HomeNav';
import News from './News/News';
import Message from './Message/Message';

export default class Home extends Component {
  render() {
    console.log('Home', this.props);
    return (
      <div className={home['home-container']}>
        <h1>Home Content</h1>
        <HomeNav />
        <hr />

        {/* 注册路由 */}
        <Switch>
          <Route exact path='/home' render={() => <div className={home.defaultHome}>Welcome to Home main page!</div>} />
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/message' component={Message}></Route>
          <Redirect to='/home' />
        </Switch>


      </div>
    )
  }
}
