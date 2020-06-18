
//import libraries
const dotenv = require('dotenv').config();

const net = require('net');

//initialize
let config = require("./config.json")[process.env.ENV];

let server = net.createServer();
let client = require('./networking/client.js');

//connection listener
server.on( 'connection', (socket) => {
    let remoteAddress = socket.remoteAddress + ':' + socket.remotePort;  
    console.log('new client connection from %s', remoteAddress);

    let c = new client();
    c.init(socket);

    socket.on('error', c.error);
    socket.on('data', c.data);
    socket.on('close', c.close);
    
});


server.listen(config, ()=>{
    console.log(`server bound on ${ config.host }`)
});
