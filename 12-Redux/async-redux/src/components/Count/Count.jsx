import React, { Component } from 'react'
import count from './Count.module.css'
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store'
// 引入actionCreator，专门用于创建action对象
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action_creator'

export default class Count extends Component {

    // componentDidMount() {
    //     // 检测redux中状态的变化，只要变化，就调用render方法
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    render() {
        return (
            <div className={count['count-container']}>
                <h1>当前求和为: {store.getState()}</h1>
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

        // 通知redux加value
        store.dispatch(createIncrementAction(value * 1))
    }

    decrement = () => {
        const { value } = this.selectNum

        // 通知redux减value
        store.dispatch(createDecrementAction(value * 1))
    }

    incrementIfOdd = () => {
        const { value } = this.selectNum
        const count = store.getState()

        if (count % 2 !== 0)
            store.dispatch(createIncrementAction(value * 1))

    }

    incrementAsync = () => {
        const { value } = this.selectNum
        console.log('incrementAsync');
        store.dispatch(createIncrementAsyncAction(value * 1, 500))
    }
}
