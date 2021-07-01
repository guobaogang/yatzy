import {get_stock_detail} from '../constant/redux_type';
import getStockDetail from "../../utils/getStockDetail";

export const getStocks = () => {
    return (dispatch, getState) => {
        const stock = getState().stock;
        if (!stock || stock.length === 0) {
            dispatch({
                type: get_stock_detail,
                stocks: []
            })
        } else {
            getStockDetail(stock, result => {
                dispatch({
                    type: get_stock_detail,
                    stocks: result
                })
            })
        }

    }
}