class SocketServer {
  constructor(server) {
    this.io = require('socket.io')(server)

    // 房间列表
    this.roomLists = {}

    this.connNum = 1
  }

  // 监听新的连接
  listenNewConn() {
    let that = this
    this.io.on('connection', socket => {
      let roomName = `gounp${this.connNum++}`
      socket.join(roomName)
      that.roomLists.roomName = [socket.id]
      socket.emit('connectInfo', '欢迎进入聊天系统')

      this.disconnect(socket)
    })
  }

  // 断开连接
  disConn(socket) {
    socket.on('disconnect', () => {
      //socket.leave  踢出分组
    })
  }
}

export default SocketServer