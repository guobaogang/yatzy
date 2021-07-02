import {
    roll_dice
} from '../constant/redux_type';

const init = {
    left: [1, 2, 3, 4, 5],
    selected: [],
    rollTimes: 0,
    isRolling: false
};

export default (state = init, action) => {
    switch (action.type) {
        case roll_dice:
            return {
                ...state,
                ...action.dice
            };
        default:
            return state
    }
}