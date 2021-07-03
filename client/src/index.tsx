import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/Home';
import './style/main.less';
import {Provider} from 'react-redux'
import store from './redux/store';
import socket from "./model/socket";

socket.connect()

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));