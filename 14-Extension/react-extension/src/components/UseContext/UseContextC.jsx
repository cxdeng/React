import React, { Component } from 'react'
import { MyContext } from './MyContext'
import UseContextD from './UseContextD';

export default class UseContextC extends Component {

    static contextType = MyContext

    render() {
        console.log(this);
        return (
            <div className='grand'>
                <h2>This is UseContextC Component</h2>
                <h4>The username is {this.context.name} from UseContextA</h4>
                <h4>The age is {this.context.age} from UseContextA</h4>
                <UseContextD />
            </div>
        )
    }
}
