import React from 'react'
import { MyContext } from './MyContext'

export default function UseContextD() {
    return (
        <div>
            <h2>This is UseContextD Component</h2>
            <MyContext.Consumer>
                {
                    value => {
                        console.log(value);
                        return `${value.username}, age: ${value.age}`
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}
