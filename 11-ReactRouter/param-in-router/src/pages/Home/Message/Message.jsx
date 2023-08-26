import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import message from './Message.module.css'
import Detail from './Detail/Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: 'Message 1' },
            { id: '02', title: 'Message 2' },
            { id: '03', title: 'Message 3' },
            { id: '04', title: 'Message 4' },
            { id: '05', title: 'Message 5' },
            { id: '06', title: 'Message 6' },
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div className={message['message-container']}>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{pathname: '/home/message/detail', state: {id: msgObj.id, title: msgObj.title}}}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <hr />

                {/* 声明接收params参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

                {/* 声明接收search参数，无需声明接收 */}
                {/* <Route path='/home/message/detail' component={Detail} /> */}

                {/* 声明接收state参数，无需声明接收 */}
                <Route path='/home/message/detail' component={Detail} />

            </div>
        )
    }
}
