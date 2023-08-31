import React, { Component } from 'react'

export default class SetState extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <h1>当前求和为: {this.state.count}</h1>
                <button onClick={this.add}>Click to add</button>
                <h2>自动增长: </h2>
            </div>
        )
    }

    add = () => {
        /* 
            对象式的setState是函数式的setState的语法糖
        */

        // 获取原来的count值
        const { count } = this.state

        // 更新状态: 对象式的setState
        // this.setState({ count: count + 1 }, () => {
        //     console.log('callback of setState: ', this.state.count);
        // })

        // 更新状态: 函数式的setState
        this.setState((state, props) => { 
            return {count: state.count + props.nums}
         })

    }
}
