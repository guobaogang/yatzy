import {
    CALC_MY_SCORE, CALC_OPPONENT_SCORE, CONFIRM_MY_SCORE, CONFIRM_OPPONENT_SCORE, INIT_GAME_DATA
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
    start: false,
    position: 1
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
        case CALC_OPPONENT_SCORE:
            state.opponent.score = action.score
            return {
                ...state
            };
        case CONFIRM_MY_SCORE:
            state.myInfo.score = action.score
            state.isMyTurn = false
            if (state.position === 2) {
                if (state.rounds === 12) {
                    state.start = false
                } else {
                    state.rounds++
                }
            }
            return {
                ...state
            };
        case CONFIRM_OPPONENT_SCORE:
            state.opponent.score = action.score
            state.isMyTurn = true
            if (state.position === 1) {
                if (state.rounds === 12) {
                    state.start = false
                } else {
                    state.rounds++
                }
            }
            return {
                ...state
            };
        default:
            return state
    }
}