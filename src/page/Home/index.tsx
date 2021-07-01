import React, {useState} from "react";
import GamblingTable from "../GamblingTable";
import Scoreboard from "../Scoreboard";
import './index.less';

function Home() {
    return (
        <div className='home'>
            <Scoreboard/>
            <GamblingTable/>
        </div>
    );
}

export default Home;
