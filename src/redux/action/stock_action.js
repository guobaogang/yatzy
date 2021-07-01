import {add_stock} from '../constant/redux_type';

export const addStock = (stock) => {
    return (dispatch) => {
        (() => {
            dispatch({
                type: add_stock,
                stock
            })
        })()
    }
}

export const reduce = (count) => {
    return (dispatch) => {
        (() => {
            dispatch({
                type: 'reduceCount',
                count
            })
        })()
    }
}