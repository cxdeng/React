/* 
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
import {legacy_createStore, applyMiddleware} from 'redux'
// 支持异步action
import thunk from 'redux-thunk';
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
import allReducers from './reducers/index';


export default legacy_createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))