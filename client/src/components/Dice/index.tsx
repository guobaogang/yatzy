import React, {useState} from "react";
import './index.less';
import {useSelector, useDispatch} from 'react-redux';
import {select, unselect} from '../../redux/action/dice_action';

function Dice(props: any) {
    const {point, index, selected, disabled} = props;
    const dispatch = useDispatch();
    const toggleSelect = () => {
        if (disabled) return;
        if (selected) {
            dispatch(unselect(index, point))
        } else {
            dispatch(select(index, point))
        }
    }

    return (
        <div className={`dice dice-${point}`} onClick={toggleSelect}/>
    );
}

export default Dice;
