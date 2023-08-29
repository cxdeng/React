/* 
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
import {legacy_createStore, applyMiddleware} from 'redux'
// 支持异步action
import thunk from 'redux-thunk';
import countReducer from './count_reducer'

export default legacy_createStore(countReducer, applyMiddleware(thunk))