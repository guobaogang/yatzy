import {
    CALC_SCORE,
    INIT_DICE
} from '../constant/redux_type';
import calcScore from "../../utils/calculation";

export const calc = () => {
    return (dispatch, getState) => {
        const {
            left,
            selected
        } = getState().dice;

        let tempScore = calcScore(left, selected, getState().score);
        console.log(tempScore)
        dispatch({
            type: CALC_SCORE,
            score: tempScore
        })
    }
}

export const confirm = (key) => {
    return (dispatch, getState) => {
        let tempScore = getState().score
        tempScore[key].confirm = tempScore[key].temp;
        tempScore.total = (tempScore.total || 0) + tempScore[key].confirm;

        if (['one', 'two', 'three', 'four', 'five', 'six'].includes(key)) {
            tempScore.subtotal = (tempScore.subtotal || 0) + tempScore[key].confirm;
            if (tempScore.reward !== 35 && tempScore.subtotal >= 63) {
                tempScore.reward = 35;
                tempScore.total = (tempScore.total || 0) + 35;
            }
        }
        clearTemp(tempScore);
        dispatch({
            type: CALC_SCORE,
            score: tempScore
        })
        dispatch({
            type: INIT_DICE
        })
    }
}

function clearTemp(score) {
    let keys = ['one', 'two', 'three', 'four', 'five', 'six', 'all', 'sameFour', 'fullHouse', 'bicycle', 'broadway', 'yatzy'];
    keys.forEach(key => {
        score[key].temp = undefined;
    })
}