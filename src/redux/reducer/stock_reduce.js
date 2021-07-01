import {add_stock} from '../constant/redux_type';

const init = [];

export default (state = init, action) => {
    switch (action.type) {
        case add_stock:
            state.push(action.stock)
            console.log([...state])
            return [...state]
        case 'reduceCount':
            return {...state, number: action.count - 1}
        default:
            return state
    }
}
