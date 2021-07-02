import {
    roll_dice
} from '../constant/redux_type';

export const roll = () => {
    return (dispatch, getState) => {
        const {
            left,
            rollTimes,
            isRolling
        } = getState().dice;

        dispatch({
            type: roll_dice,
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
                type: roll_dice,
                dice: {
                    left: left,
                    isRolling: false,
                    rollTimes: rollTimes + 1
                }
            });
            clearTimeout(timer);
        }, 2000)
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
            type: roll_dice,
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
            type: roll_dice,
            dice: {
                left,
                selected
            }
        })
    }
}