import {get_stock_detail} from '../constant/redux_type';

const init = [];

export default (state = init, action) => {
    switch (action.type) {
        case get_stock_detail:
            return action.stocks
        case 'reduceCount':
            return {...state, number: action.count - 1}
        default:
            return state
    }
}
