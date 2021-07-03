import {
    INIT_DICE,
    ROLL_DICE
} from '../constant/redux_type';

const init = {
    left: [1, 2, 3, 4, 5],
    selected: [],
    rollTimes: 0,
    isRolling: false
};

export default (state = init, action) => {
    switch (action.type) {
        case ROLL_DICE:
            return {
                ...state,
                ...action.dice
            };
        case INIT_DICE:
            return {
                left: [1, 2, 3, 4, 5],
                selected: [],
                rollTimes: 0,
                isRolling: false
            };
        default:
            return state
    }
}