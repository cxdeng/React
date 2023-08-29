import React, { Component } from 'react'
// 引入count的容器组件
import CountContainer from './containers/Count/Count'
// 引入person的容器组件
import PersonContainer from './containers/Person/Person'

export default class App extends Component {
    render() {
        return (
            <div>
                <CountContainer />
                <hr></hr>
                <PersonContainer />
            </div>
        )
    }
}
