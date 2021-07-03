import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux'
//处理redux的异步任务的中间件
import thunk from 'redux-thunk'
import dice from './reducer/dice_reduce'
import game from './reducer/game_reduce'

const reducer = combineReducers({
    dice,
    game
})

const store = createStore(reducer, compose(
    applyMiddleware(thunk)
))

export default store