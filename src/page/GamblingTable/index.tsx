import React, {useState} from "react";
import './index.less';
import Dice from '../../components/Dice';
import {useSelector, useDispatch} from 'react-redux';
import {roll} from '../../redux/action/dice_action';

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
        <div className={'right-panel'}>
            <div className={'left-times'}>
                剩余次数：{3 - rollTimes}
            </div>
            <div className='gambling-table'>
                <div className='dice-cup selected'>
                    {
                        selected.map((item: any, index: number) => {
                            return <Dice key={index} point={item} index={index} selected={true}/>
                        })
                    }
                </div>
                <div className='dice-cup unselected'>
                    {
                        left.map((item: any, index: number) => {
                            return <Dice key={index} point={item} index={index} selected={false}/>
                        })
                    }
                </div>
            </div>
            <button className={'roll-btn'} onClick={myRoll} disabled={isRolling || rollTimes === 3}>roll</button>
        </div>
    );
}

export default GamblingTable;
