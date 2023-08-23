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
