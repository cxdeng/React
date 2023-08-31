import React, { Component } from 'react'
import renderPropsStyle from './RenderProps.module.css'

export default class RenderProps extends Component {

    state = {
        name: 'Jack'
    }

    render() {
        return (
            <div className={renderPropsStyle.parent}>
                <h3>Parent Component</h3>
                <A>Hello A</A>
                <A>
                    <B name={this.state.name} />
                </A>

                <C render={(age) => <D age={age} />} />
            </div>
        )
    }
}

function A(props) {
    return (
        <div className={renderPropsStyle.a}>
            <h3>A Component</h3>
            <h4>props.children: {props.children}</h4>

            {/* <B /> */}
        </div>
    )
}

function B(props) {
    return (
        <div className={renderPropsStyle.b}>
            <h3>B Component</h3>
            <h4>Name from Parent Component: {props.name}</h4>
        </div>
    )
}

function C(props) {

    const [age, setAge] = React.useState(21)
    console.log('age from C Component: ', age);

    function changeAge() {
        setAge(()=>{
            return age + 1
        })
    }

    return (
        <div className={renderPropsStyle.c}>
            <h3>C Component</h3>
            <h4>props.children: {props.children}</h4>
            <button onClick={changeAge}>Click to change Age</button>
            <h4>{props.render(age)}</h4>
        </div>
    )
}

function D(props) {
    return (
        <div className={renderPropsStyle.d}>
            <h3>D Component</h3>
            <h4>props.children: {props.children}</h4>
            <h4>Age: {props.age}</h4>
        </div>
    )
}