import React, {useState} from "react";
import './index.less';
import {useDispatch, useSelector} from "react-redux";
import {confirm} from '../../redux/action/score_action';
import ScoreColumn from "../../components/ScoreColumn";

function Scoreboard() {
    //@ts-ignore
    const score = useSelector(state => state.score);

    const dispatch = useDispatch();

    const confirmScore = (key: string) => {
        dispatch(confirm(key))
    }

    return (
        <div className='score-board'>
            <div>计分板</div>
            <div className={'score-table'}>
                <ScoreColumn isTitle={true}/>
                <ScoreColumn score={score}/>
            </div>
            {/*<div>
                <div>
                    <span>一点</span>
                    <span onClick={() => confirmScore('one')}
                          className={score.one.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.one.confirm === undefined ? score.one.temp : score.one.confirm
                        }
                    </span>
                </div>
                <div>
                    <span>两点</span>
                    <span onClick={() => confirmScore('two')}
                          className={score.two.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.two.confirm === undefined ? score.two.temp : score.two.confirm
                        }
                    </span>
                </div>
                <div>
                    <span>三点</span>
                    <span onClick={() => confirmScore('three')}
                          className={score.three.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.three.confirm === undefined ? score.three.temp : score.three.confirm
                        }
                    </span>
                </div>
                <div>
                    <span>四点</span>
                    <span onClick={() => confirmScore('four')}
                          className={score.four.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.four.confirm === undefined ? score.four.temp : score.four.confirm
                        }
                    </span>
                </div>
                <div>
                    <span>五点</span>
                    <span onClick={() => confirmScore('five')}
                          className={score.five.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.five.confirm === undefined ? score.five.temp : score.five.confirm
                        }
                    </span>
                </div>
                <div>
                    <span>六点</span>
                    <span onClick={() => confirmScore('six')}
                          className={score.six.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.six.confirm === undefined ? score.six.temp : score.six.confirm
                        }
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <span>小记</span>
                    <span>{score.subtotal || 0}/63</span>
                </div>
                <div>
                    <span>奖励分+35</span>
                    <span>{score.reward}</span>
                </div>
                <div>1~6点总计超过63即可获得奖励分</div>
            </div>
            <div>
                <div>
                    <span>全选</span>
                    <span onClick={() => confirmScore('all')}
                          className={score.all.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.all.confirm === undefined ? score.all.temp : score.all.confirm
                        }
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <span>四骰同花</span>
                    <span onClick={() => confirmScore('sameFour')}
                          className={score.sameFour.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.sameFour.confirm === undefined ? score.sameFour.temp : score.sameFour.confirm
                        }
                    </span>
                </div>
                <div>
                    <span>葫芦</span>
                    <span onClick={() => confirmScore('fullHouse')}
                          className={score.fullHouse.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.fullHouse.confirm === undefined ? score.fullHouse.temp : score.fullHouse.confirm
                        }
                    </span>
                </div>
                <div>
                    <span>小顺</span>
                    <span onClick={() => confirmScore('bicycle')}
                          className={score.bicycle.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.bicycle.confirm === undefined ? score.bicycle.temp : score.bicycle.confirm
                        }
                    </span>
                </div>
                <div>
                    <span>大顺</span>
                    <span onClick={() => confirmScore('broadway')}
                          className={score.broadway.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.broadway.confirm === undefined ? score.broadway.temp : score.broadway.confirm
                        }
                    </span>
                </div>
                <div>
                    <span>快艇</span>
                    <span onClick={() => confirmScore('yatzy')}
                          className={score.yatzy.confirm === undefined ? 'temp-score' : 'confirm-score'}>
                        {
                            score.yatzy.confirm === undefined ? score.yatzy.temp : score.yatzy.confirm
                        }
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <span>总计</span>
                    <span>{score.total}</span>
                </div>
            </div>*/}
        </div>

    );
}

export default Scoreboard;
