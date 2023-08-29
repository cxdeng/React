/* 
    该文件专门为Count组件生成action对象
*/

// 同步action: action的值为object
import { INCREMENT, DECREMENT } from './constant'

export function createIncrementAction(data) {
    return { type: INCREMENT, data: data }
}

export function createDecrementAction(data) {
    return { type: DECREMENT, data: data }
}

export function createIncrementAsyncAction(data, time) {
    // 异步 action: action的值为函数，在异步action中一般会调用同步action
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}