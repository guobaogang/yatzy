import React, {useEffect, useState} from "react";
import GamblingTable from "../GamblingTable";
import Scoreboard from "../Scoreboard";
import './index.less';
import socket from "../../model/socket";
import {initGameData, userJoin, userLeave, userConfirmScore} from "../../redux/action/game_action";
import {userStartRoll, userEndRoll, userSelect} from '../../redux/action/dice_action';
import {useDispatch} from "react-redux";

function Home() {
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const dispatch = useDispatch();
    const login = () => {
        /*socket.connect(()=>{
            setIsLogin(true)
        })*/
        let user = {
            // @ts-ignore
            id: new Date().getTime(),
            name
        }
        socket.emit('login', user, (users: any) => {
            dispatch(initGameData(users, user));
            setIsLogin(true)
        });
    }
    useEffect(() => {
        // @ts-ignore
        socket.on('userJoin', (user: any) => {
            dispatch(userJoin(user))
        })
        // @ts-ignore
        socket.on('userLeave', (user: any) => {
            dispatch(userLeave(user))
        })
        // @ts-ignore
        socket.on('userStartRoll', (user: any) => {
            dispatch(userStartRoll(user))
        })
// @ts-ignore
        socket.on('userEndRoll', (dice: any, user: any) => {
            dispatch(userEndRoll(dice, user))
        })
// @ts-ignore
        socket.on('userConfirmScore', (score: any, user: any) => {
            dispatch(userConfirmScore(score, user))
        })
// @ts-ignore
        socket.on('userSelect', (dice: any, user: any) => {
            dispatch(userSelect(dice, user))
        })
    }, [])
    return (
        <div className='home'>
            {
                isLogin ? <>
                    <Scoreboard/>
                    <GamblingTable/>
                </> : <div>
                    <div>
                        请输入姓名
                    </div>
                    <div>
                        <input type="text" value={name} onChange={(e) => {
                            // @ts-ignore
                            setName(e.target.value)
                        }}/>
                    </div>
                    <button onClick={login}>确认</button>
                </div>
            }

        </div>
    );
}

export default Home;
