import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person_action_creator'

class Person extends Component {
    render() {
        return (
            <div>
                <h2>Person Component, 上方组件求和为: {this.props.count}</h2>
                <input ref={cur => this.nameNode = cur} type="text" placeholder='Input Name' />
                <input ref={cur => this.ageNode = cur} type="text" placeholder='Input Age' />
                <button onClick={this.addPerson}>Add</button>

                <ul>
                    {
                        this.props.personArr.map((personObj) => {
                            return <li key={personObj.id}>{personObj.name}, {personObj.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value * 1

        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)

        this.nameNode.value = ''
        this.ageNode.value = ''
    }
}


export default connect(
    state => ({ personArr: state.person, count: state.count }),

    {
        addPerson: createAddPersonAction
    }
)(Person)