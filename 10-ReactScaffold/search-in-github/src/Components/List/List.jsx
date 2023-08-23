import React, { Component } from 'react'
import list from './List.module.css'
import picture from '../../img/Leslie.webp'

export default class List extends Component {
  render() {
    return (
      <div className={list['list-container']}>
        <div className={list.card}>
          <a href="">
            <img src={picture} alt="avatar" />
          </a>
          <div>Leslie</div>
        </div>

        <div className={list.card}>
          <a href="">
            <img src={picture} alt="" />
          </a>
          <div>Leslie</div>
        </div>

        <div className={list.card}>
          <a href="">
            <img src={picture} alt="" />
          </a>
          <div>Leslie</div>
        </div>

        <div className={list.card}>
          <a href="">
            <img src={picture} alt="" />
          </a>
          <div>Leslie</div>
        </div>

        <div className={list.card}>
          <a href="">
            <img src={picture} alt="" />
          </a>
          <div>Leslie</div>
        </div>

        <div className={list.card}>
          <a href="">
            <img src={picture} alt="" />
          </a>
          <div>Leslie</div>
        </div>

        <div className={list.card}>
          <a href="">
            <img src={picture} alt="" />
          </a>
          <div>Leslie</div>
        </div>

        <div className={list.card}>
          <a href="">
            <img src={picture} alt="" />
          </a>
          <div>Leslie</div>
        </div>

        <div className={list.card}>
          <a href="">
            <img src={picture} alt="" />
          </a>
          <div>Leslie</div>
        </div>

        <div className={list.card}>
          <a href="">
            <img src={picture} alt="" />
          </a>
          <div>Leslie</div>
        </div>

        <div className={list.card}>
          <a href="">
            <img src={picture} alt="" />
          </a>
          <div>Leslie</div>
        </div>

      </div>
    )
  }
}
