const express = require("express")
const router = require('./routes')
const app = express();
const cors = require('cors');
const mongoose = require('./config/mongoose/mongoose')
const {handleSocket} = require('./config/socket/socketManager')

app.use(cors());

// socket configurations
const http = require('http')
const server = http.createServer(app)
const SocketServer = require('socket.io');
const io = SocketServer({
    cors: {
        origin: 'http://localhost:3000'
    }
});
io.listen(server)
// console.log("Game Socket Server started on port", 1000)
handleSocket(io);
// end of socket configurations

app.use('/', require('./routes'))

server.listen(8000, () => {
    console.log("Game server started on port", 8000)
})