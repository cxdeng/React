// 引入Count的UI组件
import CountUI from '../../components/Count/Count'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action_creator'

/* 
    状态:
    函数的返回值作为状态传递给UI组件
    返回对象中的key作为传递给UI组件的props的key，
    value作为传递给UI组件的props的value
*/
const mapStateToProps = state => ({ count: state })


/* 
    操作状态的方法
    函数返回的对象中的key作为传递给UI组件的props的key，
    value作为传递给UI组件props的value 
*/
const mapDispatchToProps = dispatch => (
    {
        increment: (number) => {
            // 通知redux执行加法
            dispatch(createIncrementAction(number))
        },

        decrement: (number) => {
            dispatch(createDecrementAction(number))
        },

        incrementAsync: (number, time) => {
            dispatch(createIncrementAsyncAction(number, time))
        }
    }
)

// 使用connect()()创建Count容器组件
// const CountContianer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

const CountContianer = connect(
    state => ({ count: state }),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(CountUI)

export default CountContianer