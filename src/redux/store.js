import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux'
//处理redux的异步任务的中间件
import thunk from 'redux-thunk'
import dice from './reducer/dice_reduce'
import score from './reducer/score_reduce'

const reducer = combineReducers({
    dice,
    score
})

const store = createStore(reducer, compose(
    applyMiddleware(thunk)
))

export default store