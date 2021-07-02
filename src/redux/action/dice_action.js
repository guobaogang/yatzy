import {
    ROLL_DICE
} from '../constant/redux_type';
import {calc} from './score_action';

export const init = () => {

}

export const roll = () => {
    return (dispatch, getState) => {
        const {
            left,
            rollTimes,
            isRolling
        } = getState().dice;

        dispatch({
            type: ROLL_DICE,
            dice: {
                left: left.fill(0),
                isRolling: true
            }
        })
        let timer = setTimeout(() => {
            for (let index = 0; index < left.length; index++) {
                left[index] = Math.ceil(Math.random() * 6);
            }
            dispatch({
                type: ROLL_DICE,
                dice: {
                    left: left,
                    isRolling: false,
                    rollTimes: rollTimes + 1
                }
            });
            dispatch(calc());
            clearTimeout(timer);
        }, 1000)
    }
}

export const select = (index, num) => {
    return (dispatch, getState) => {
        const {
            left,
            selected,
            isRolling,
            rollTimes
        } = getState().dice;
        if (isRolling || rollTimes === 0 || rollTimes === 3) return;
        left.splice(index, 1);
        selected.push(num);
        dispatch({
            type: ROLL_DICE,
            dice: {
                left,
                selected
            }
        })
    }
}


export const unselect = (index, num) => {
    return (dispatch, getState) => {
        const {
            left,
            selected,
            isRolling,
            rollTimes
        } = getState().dice;
        if (isRolling || rollTimes === 0 || rollTimes === 3) return;
        selected.splice(index, 1);
        left.push(num);
        dispatch({
            type: ROLL_DICE,
            dice: {
                left,
                selected
            }
        })
    }
}