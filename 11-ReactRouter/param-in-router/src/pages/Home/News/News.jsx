import React, { Component } from 'react'
import news from './News.module.css'

export default class News extends Component {
  render() {
    return (
      <div className={news['news-container']}>
        <li className={news['list-news']}>news 1</li>
        <li className={news['list-news']}>news 2</li>
        <li className={news['list-news']}>news 3</li>
        <li className={news['list-news']}>news 4</li>
        <li className={news['list-news']}>news 5</li>
      </div>
    )
  }
}
