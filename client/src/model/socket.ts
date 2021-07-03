import io from 'socket.io-client';
import serverIp from '../../ipcong';

// @ts-ignore
const socket = io(`http://${serverIp}:3000`);

export default socket;