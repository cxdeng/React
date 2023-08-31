import React, { Component } from 'react'
import UseContextC from './UseContextC'

export default class UseContextB extends Component {
    render() {
        return (
            <div className='child'>
                <h2>This is UseContextB Component</h2>
                <UseContextC />
            </div>
        )
    }
}
