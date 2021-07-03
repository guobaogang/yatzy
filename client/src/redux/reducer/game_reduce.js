import {
    CALC_MY_SCORE, CONFIRM_MY_SCORE, INIT_GAME_DATA
} from '../constant/redux_type';

const init = {
    myInfo: {
        id: 1,
        name: '',
        score: {
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
        }
    },
    opponent: {
        id: 2,
        name: '',
        score: {
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
        }
    },
    rounds: 0, //轮次
    isMyTurn: true,    //who is turn
    start: false
};

export default (state = init, action) => {
    switch (action.type) {
        case INIT_GAME_DATA:
            return {
                ...action.game
            }
        case CALC_MY_SCORE:
            state.myInfo.score = action.score
            return {
                ...state
            };
        case CONFIRM_MY_SCORE:
            state.myInfo.score = action.score
            state.isMyTurn = false
            return {
                ...state
            }
        default:
            return state
    }
}