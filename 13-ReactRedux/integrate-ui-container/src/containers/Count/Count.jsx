// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action_creator'
import React, { Component } from 'react'
import count from './Count.module.css'

// 定义UI组件
export class Count extends Component {

    render() {
        console.log('Count', this.props);
        return (
            <div className={count['count-container']}>
                <h1>当前求和为: {this.props.count}</h1>
                <select ref={current => this.selectNum = current}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为基数时+</button>
                <button onClick={this.incrementAsync}>异步+</button>
            </div>
        )
    }

    increment = () => {
        const { value } = this.selectNum
        this.props.increment(value * 1)
    }

    decrement = () => {
        const { value } = this.selectNum
        this.props.decrement(value * 1)
    }

    incrementIfOdd = () => {
        const { value } = this.selectNum

        if (this.props.count % 2 !== 0)
            this.props.increment(value * 1)
    }

    incrementAsync = () => {
        const { value } = this.selectNum
        this.props.incrementAsync(value * 1, 500)
    }
}


// 使用connect()()创建Count容器组件
// const CountContianer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

const CountContianer = connect(
    state => ({ count: state }),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(Count)

export default CountContianer