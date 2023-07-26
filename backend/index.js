const express = require("express")
const router = require('./routes')
const app = express();
const cors = require('cors');
const mongoose = require('./config/mongoose/mongoose')

app.use(cors());

// socket configurations
const http = require('http')
const server = http.createServer(app)
const SocketServer = require('socket.io')
const io = new SocketServer(server);
// end of socket configurations

app.use('/', require('./routes'))

app.listen(8000, () => {
    console.log("Game server started on port", 8000)
})