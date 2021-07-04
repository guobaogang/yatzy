import {
    ROLL_DICE
} from '../constant/redux_type';
import {calcMyScore, calcOpponentScore} from './game_action';
import socket from "../../model/socket";


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

        socket.emit('startRoll');

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
            socket.emit('endRoll', {
                left: left,
                rollTimes: rollTimes + 1
            });
            dispatch(calcMyScore());
            clearTimeout(timer);
        }, 1000)
    }
}

export const userStartRoll = (user) => {
    return (dispatch, getState) => {
        const {
            left,
            rollTimes
        } = getState().dice;

        dispatch({
            type: ROLL_DICE,
            dice: {
                left: left.fill(0),
                isRolling: true
            }
        })
    }
}

export const userEndRoll = (dice, user) => {
    return (dispatch, getState) => {
        const {
            left,
            rollTimes
        } = dice;

        dispatch({
            type: ROLL_DICE,
            dice: {
                left: left,
                isRolling: false,
                rollTimes: rollTimes
            }
        });
        dispatch(calcOpponentScore());
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
        socket.emit('select', {
            left,
            selected
        });
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
        socket.emit('select', {
            left,
            selected
        });
    }
}

export const userSelect = (dice, user) => {
    return (dispatch) => {
        dispatch({
            type: ROLL_DICE,
            dice: dice
        })
    }
}