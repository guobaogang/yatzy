import React, {useState} from "react";
import './index.less';
import {useDispatch, useSelector} from "react-redux";
import ScoreColumn from "../../components/ScoreColumn";

function Scoreboard() {
    //@ts-ignore
    const game = useSelector(state => state.game);

    return (
        <div className={'score-board' + (game.start ? ' game-start' : '')}>
            <div className={'score-board-title'}>计分板</div>
            <div className={'score-table'}>
                <ScoreColumn isTitle={true} rounds={game.rounds}/>
                {
                    game.position === 1 ?
                        <>
                            <ScoreColumn isTurn={game.isMyTurn} disabled={!game.isMyTurn} play={game.myInfo}/>
                            <ScoreColumn isTurn={!game.isMyTurn} disabled={true} play={game.opponent}/>
                        </> :
                        <>
                            <ScoreColumn isTurn={!game.isMyTurn} disabled={true} play={game.opponent}/>
                            <ScoreColumn isTurn={game.isMyTurn} disabled={!game.isMyTurn} play={game.myInfo}/>
                        </>
                }
                <div className={'reword-desc'}>
                    1~6总计超过63分可获得奖励分
                </div>
            </div>
        </div>

    );
}

export default Scoreboard;
