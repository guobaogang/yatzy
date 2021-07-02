import {
    CALC_SCORE
} from '../constant/redux_type';

const init = {
    one: {},
    two: {},
    three: {},
    four: {},
    five: {},
    six: {},
    all: {},
    sameFour: {},
    fullHouse: {},
    bicycle: {},
    broadway: {},
    yatzy: {}
};

export default (state = init, action) => {
    switch (action.type) {
        case CALC_SCORE:
            return {
                ...state,
                ...action.dice
            };
        default:
            return state
    }
}