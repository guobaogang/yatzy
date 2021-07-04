import {
    CALC_MY_SCORE,
    INIT_DICE,
    CONFIRM_MY_SCORE,
    INIT_GAME_DATA,
    CALC_OPPONENT_SCORE,
    CONFIRM_OPPONENT_SCORE
} from '../constant/redux_type';
import calcScore from "../../utils/calculation";
import socket from "../../model/socket";

export const initGameData = (users, me) => {
    return (dispatch) => {
        let other = users.find(user => user.id !== me.id);
        let game = {
            myInfo: {
                id: me.id,
                name: me.name,
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
                id: other && other.id,
                name: other && other.name,
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
            isMyTurn: false,    //who is turn
            start: !!other,
            position: other ? 2 : 1
        }
        dispatch({
            type: INIT_GAME_DATA,
            game
        })
    };
}

export const userJoin = (user) => {
    return (dispatch, getState) => {
        const game = getState().game;
        if (game.myInfo.id === user.id) return;
        game.myInfo.score = {
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
        game.opponent = {
            id: user.id,
            name: user.name,
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
        };
        game.isMyTurn = true;
        game.rounds = 0;
        game.start = true;
        dispatch({
            type: INIT_GAME_DATA,
            game
        })
    }
}

export const userLeave = (user) => {
    return (dispatch, getState) => {
        const game = getState().game;
        game.opponent = {
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
        };
        game.position = 1;
        game.start = false;
        game.isMyTurn = false;
        dispatch({
            type: INIT_GAME_DATA,
            game
        })
    }
}

export const calcMyScore = () => {
    return (dispatch, getState) => {
        const {
            left,
            selected
        } = getState().dice;

        let tempScore = calcScore(left, selected, getState().game.myInfo.score);
        dispatch({
            type: CALC_MY_SCORE,
            score: tempScore
        })
    }
}

export const calcOpponentScore = () => {
    return (dispatch, getState) => {
        const {
            left,
            selected
        } = getState().dice;

        let tempScore = calcScore(left, selected, getState().game.opponent.score);
        dispatch({
            type: CALC_OPPONENT_SCORE,
            score: tempScore
        })
    }
}

export const confirmMyScore = (key) => {
    return (dispatch, getState) => {
        let tempScore = getState().game.myInfo.score;
        if (tempScore[key].temp === undefined || tempScore[key].temp === null) return;
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
            type: CONFIRM_MY_SCORE,
            score: tempScore
        })
        dispatch({
            type: INIT_DICE
        })
        socket.emit('confirmScore', {
            score: tempScore
        });
        //checkWin(getState().game, true);
    }
}

export const userConfirmScore = (score, user) => {
    return (dispatch, getState) => {
        dispatch({
            type: CONFIRM_OPPONENT_SCORE,
            score: score && score.score
        })
        dispatch({
            type: INIT_DICE
        })
        //checkWin(getState().game, false);
    }
}

function checkWin(game, isMe) {
    const {position, rounds} = game;
    if (((isMe && position === 2) || (!isMe && position === 1)) && rounds === 12) {
        if (game.myInfo.total > game.opponent.total) {
            alert('游戏结束，' + game.myInfo.name + '获胜！')
        } else if (game.myInfo.total < game.opponent.total) {
            alert('游戏结束，' + game.opponent.name + '获胜！')
        } else {
            alert('游戏结束，平局')
        }
    }
}

function clearTemp(score) {
    let keys = ['one', 'two', 'three', 'four', 'five', 'six', 'all', 'sameFour', 'fullHouse', 'bicycle', 'broadway', 'yatzy'];
    keys.forEach(key => {
        score[key].temp = undefined;
    })
}