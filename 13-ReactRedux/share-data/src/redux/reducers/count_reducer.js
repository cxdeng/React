/* 
    1. 该文件是用于创建一个为COunt组件服务的reducer
    reducer的本质就是一个函数

    2. reducer函数会接到两个参数，
    分别为之前的状态 prevState， 动作对象action
*/
import { INCREMENT, DECREMENT } from "../constant";
const initState = 0
export default function countReducer(prevState = initState, action) {

    console.log('countReducer', prevState, action);

    // 从action对象中获取type和data
    const { type, data } = action

    // 根据type对象决定如何加工数据
    switch (type) {
        case INCREMENT:
            return prevState + data

        case DECREMENT:
            return prevState - data

        default:
            return prevState;
    }
}