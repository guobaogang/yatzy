import React, {useState} from "react";
import './index.less';
import {useSelector, useDispatch} from 'react-redux';
import {select, unselect} from '../../redux/action/dice_action';
import {confirm} from "../../redux/action/score_action";

function ScoreColumn(props: any) {
    const {isTitle, score} = props;
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
        dispatch(confirm(key))
    }

    return (
        <div className={'score-column ' + (isTitle ? 'score-column-title' : 'score-column-score')}>
            {
                Object.keys(keyMap).map(key => {
                    // @ts-ignore
                    return isTitle ? (key === 'name' ?
                        <div key={key} className={'score-col-item score-col-name'}>
                            <div>回合</div>
                            <div>1/12</div>
                            <div>排列组合名</div>
                        </div> :
                        // @ts-ignore
                        <div key={key} className={'score-col-item'}>{keyMap[key]}</div>) :
                        (display.includes(key) ?
                            <div key={key} className={'score-col-item' + (key === 'name' ? ' score-col-name' : '')}>
                                {key === 'subtotal' ? ((score[key] || 0) + ' /63') : score[key]}
                            </div> :
                            <div key={key} onClick={() => confirmScore(key)}
                                 className={'score-col-item ' + (score[key].confirm === undefined ? 'temp-score' : 'confirm-score')}>
                                {
                                    score[key].confirm === undefined ? score[key].temp : score[key].confirm
                                }
                            </div>)
                })
            }
        </div>
    );
}

export default ScoreColumn;
