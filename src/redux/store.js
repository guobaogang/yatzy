import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
//处理redux的异步任务的中间件
import thunk from 'redux-thunk'
import stock from './reducer/stock_reduce'
import stocks from './reducer/stocks_reduce'

const reducer = combineReducers({
    stock,
    stocks
})

const store = createStore(reducer, compose(
    applyMiddleware(thunk)
))

export default store
