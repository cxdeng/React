import React, { Component } from 'react'
import SetState from './components/SetState/SetState'

export default class App extends Component {
    render() {
        return (
            <div>
                <SetState nums={2} />
            </div>
        )
    }
}
