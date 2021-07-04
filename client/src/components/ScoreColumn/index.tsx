import React, {useState} from "react";
import './index.less';
import {useSelector, useDispatch} from 'react-redux';
import {confirmMyScore} from "../../redux/action/game_action";

function ScoreColumn(props: any) {
    const {isTitle, play = {}, rounds, disabled, isTurn} = props;
    const {score} = play;
    const dispatch = useDispatch();
    const keyMap = {
        name: '',
        one: '一点',
        two: '两点',
        three: '三点',
        four: '四点',
        five: '五点',
        six: '六点',
        subtotal: '小计',
        reward: '奖励分+35',
        all: '全选',
        sameFour: '四骰同花',
        fullHouse: '葫芦',
        bicycle: '小顺',
        broadway: '大顺',
        yatzy: '快艇',
        total: '总计点数'
    }

    let display = ['name', 'subtotal', 'reward', 'total'];

    const confirmScore = (key: string) => {
        if (disabled) return;
        dispatch(confirmMyScore(key))
    }

    return (
        <div
            className={'score-column ' +
            (isTitle ? 'score-column-title' : 'score-column-score') +
            (isTurn ? ' is-turn' : '')}>
            {
                // @ts-ignore
                Object.keys(keyMap).map((key: any) => {
                    console.log('key === ' + key);
                    console.log('value === ' + (score && score[key]))
                    // @ts-ignore
                    return isTitle ? (key === 'name' ?
                        <div key={key} className={`score-col-item score-col-${key}`}>
                            <div className={'round'}>回合</div>
                            <div className={'round'}>{rounds} /12</div>
                            <div className={'order-title'}>排列组合名</div>
                        </div> :
                        // @ts-ignore
                        <div key={key} className={`score-col-item score-col-${key}`}>{keyMap[key]}</div>) :
                        // @ts-ignore
                        (display.includes(key) ?
                            <div key={key} className={`score-col-item score-col-${key}`}>
                                {key === 'subtotal' ? ((score[key] || 0) + ' /63') :
                                    key === 'name' ? play.name : score[key]}
                            </div> :
                            <div key={key} onClick={() => confirmScore(key)}
                                 className={`score-col-item score-col-${key} ` + (score[key] && score[key].confirm === undefined ? 'temp-score' : 'confirm-score')}>
                                {
                                    score[key] && score[key].confirm === undefined ? score[key] && score[key].temp : score[key] && score[key].confirm
                                }
                            </div>)
                })
            }
        </div>
    );
}

export default ScoreColumn;
