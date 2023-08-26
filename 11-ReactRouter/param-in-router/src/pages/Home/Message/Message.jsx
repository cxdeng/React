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
                                    <Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>

                                    <button onClick={this.pushView(msgObj.id, msgObj.title)}>Push to view</button>
                                    <button onClick={this.replaceView(msgObj.id, msgObj.title)}>Replace to view</button>

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

    /* 
        编程式路由导航
    */
    replaceView = (id, title) => {
        return () => {
            // replace跳转 + params参数
            // this.props.history.replace(`/home/message/detail/${id}/${title}`)

            // replace跳转 + search参数
            // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

            // replace跳转 + sstate参数
            this.props.history.replace('/home/message/detail', { id: id, title: title })

        }
    }

    pushView = (id, title) => {
        return () => {
            // push跳转 + params参数
            // this.props.history.push(`/home/message/detail/${id}/${title}`)

            // push跳转 + search参数
            // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

            // push跳转 + sstate参数
            this.props.history.push('/home/message/detail', { id: id, title: title })


        }
    }
}
