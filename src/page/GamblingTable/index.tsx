import React, {useState} from "react";
import './index.less';
import Dice from '../../components/Dice'

function GamblingTable() {
    return (
        <div className='gambling-table'>赌桌
        <div>
            <Dice/>
        </div>
        </div>
    );
}

export default GamblingTable;
