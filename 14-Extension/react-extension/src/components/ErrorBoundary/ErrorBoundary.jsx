import React, { Component } from 'react'
import Child from './Child'

export default class ErrorBoundary extends Component {
    state = {
        // 用于标识子组件是否产生错误
        hasError: false
    }

    /* 
        当子组件出现错误的时候，会触发这个函数的调用并携带错误信息
        只能处理生命周期产生的错误
    */
    static getDerivedStateFromError(error) {
        console.log('@@@Error', error);

        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // 统计错误次数，反馈给服务器
        console.log('Error happened in Child Component', error, errorInfo);
    }

    render() {
        return (
            <div>
                <h2>
                    This is ErrorBoundary Component
                </h2>
                {this.state.hasError ? <h2>There is a Error</h2> : <Child />}
            </div>
        )
    }
}