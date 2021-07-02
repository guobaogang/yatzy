import React, { useState } from "react";
import './index.less';
import Dice from '../../components/Dice';
import { useSelector, useDispatch } from 'react-redux';
import { roll } from '../../redux/action/dic_action';

function GamblingTable() {

    const {
        left,
        selected,
        rollTimes,
        isRolling
        //@ts-ignore
    } = useSelector(state => state.dice);
    const dispatch = useDispatch();

    const myRoll = () => {
        dispatch(roll())
    }

    return (
        <div className='gambling-table'>赌桌
            <div>已选中</div>
            <div className='dice-cup'>
                {
                    selected.map((item: any, index: number) => {
                        return <Dice key={index} point={item} index={index} selected={true} />
                    })
                }
            </div>
            <div>未选中</div>
            <div className='dice-cup'>
                {
                    left.map((item: any, index: number) => {
                        return <Dice key={index} point={item} index={index} selected={false} />
                    })
                }
            </div>
            <button onClick={myRoll} disabled={isRolling || rollTimes === 3}>roll</button>
        </div>
    );
}

export default GamblingTable;
