/* 
    该文件用于汇总所有的reducers为一个总的reducers
*/
// 引入combineReducers，用于汇总多个reducers
import {combineReducers} from 'redux'
import countReducer from '../reducers/count_reducer'
import personReducer from '../reducers/person_reducer'

/* 
    合并所有 reducer
*/
const allReducers = combineReducers(
    {
        count: countReducer, 
        person: personReducer
    }
)

export default allReducers