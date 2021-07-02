<div className="dice"></div>
import React, { useState } from "react";
import './index.less';
import { useSelector, useDispatch } from 'react-redux';
import { select, unselect } from '../../redux/action/dic_action';

function Dice(props: any) {
    const { point, index, selected } = props;
    const dispatch = useDispatch();
    const toogleSelect = () => {
        if (selected) {
            dispatch(unselect(index, point))
        } else {
            dispatch(select(index, point))
        }
    }

    return (
        <div className={`dice dice-${point}`} onClick={toogleSelect}></div>
    );
}

export default Dice;
