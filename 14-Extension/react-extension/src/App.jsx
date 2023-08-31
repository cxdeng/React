import React, { Component } from 'react'
import './index.css'
import SetState from './components/SetState/SetState'
import Hooks from './components/Hooks/Hooks'
import UseFragment from './components/UseFragment/UseFragment'
import UseContextA from './components/UseContext/UseContextA'
import Optimization from './components/Optimization/Optimization'
import RenderProps from './components/RenderProps/RenderProps'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <SetState nums={2} /> */}
                {/* <Hooks /> */}
                {/* <UseFragment/> */}
                {/* <UseContextA /> */}
                {/* <Optimization /> */}
                {/* <RenderProps /> */}
                <ErrorBoundary />
            </div>
        )
    }
}
