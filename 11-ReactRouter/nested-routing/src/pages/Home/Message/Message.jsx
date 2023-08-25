import React, { Component } from 'react'
import message from './Message.module.css'

export default class Message extends Component {
    render() {
        return (
            <div className={message['message-container']}>
                <li className={message['list-message']}>Message 1</li>
                <li className={message['list-message']}>Message 2</li>
                <li className={message['list-message']}>Message 3</li>
                <li className={message['list-message']}>Message 4</li>
                <li className={message['list-message']}>Message 5</li>
            </div>
        )
    }
}
