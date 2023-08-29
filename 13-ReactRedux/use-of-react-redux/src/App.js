import React, { Component } from 'react'
import store from './redux/store'
import CountContainer from './containers/Count/Count'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 给容器组件传递store */}              
                <CountContainer store={store} />
            </div>
        )
    }
}
