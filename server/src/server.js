const port = 3000;
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {cors: true});

//所有已登录用户
let connectedUsers = [];

//socket连接
io.on("connection", socket => {
    //updateUser();
    console.log('connected')
    let user = {};
    //用户登录
    socket.on('login', (userInfo, cb) => {
        user = userInfo;
        if (connectedUsers.length === 2) return;
        connectedUsers.push(userInfo)
        console.log(connectedUsers)
        cb(connectedUsers);
        userJoin();
    });

    //广播更新用户列表
    function userJoin() {
        socket.broadcast.emit('userJoin', user);
    }

    function userLeave() {
        socket.broadcast.emit('userLeave', user);
    }

    socket.on('startRoll', () => {
        socket.broadcast.emit('userStartRoll', user);
    })

    socket.on('endRoll', (dice) => {
        socket.broadcast.emit('userEndRoll', dice, user);
    })

    socket.on('confirmScore', (score) => {
        socket.broadcast.emit('userConfirmScore', score, user);
    })

    socket.on('select', (dice) => {
        socket.broadcast.emit('userSelect', dice, user);
    })

    //断开socket连接
    socket.on('disconnect', () => {
        console.log(user.name + "断开连接");
        let index = connectedUsers.findIndex(item => item.id === user.id);
        if (index > -1) {
            connectedUsers.splice(index, 1);
            userLeave();
        }
    });
})

httpServer.listen(port, () => console.log(`Example app listening on port port!`))