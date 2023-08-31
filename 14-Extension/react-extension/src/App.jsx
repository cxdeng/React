import React, { Component } from 'react'
import SetState from './components/SetState/SetState'
import Hooks from './components/Hooks/Hooks'
import UseFragment from './components/UseFragment/UseFragment'
import UseContextA from './components/UseContext/UseContextA'
import './index.css'
import Optimization from './components/Optimization/Optimization'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <SetState nums={2} /> */}
                {/* <Hooks /> */}
                {/* <UseFragment/> */}
                {/* <UseContextA /> */}
                <Optimization />
            </div>
        )
    }
}
