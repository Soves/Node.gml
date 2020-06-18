
const PACKET = require('./packet');

//functions
let readString = (buff, index = 0)=>{
    let readPos = index;
    //loop through buffer till null terminator is found
    while( readPos < buff.length && buff.readUInt8(readPos) !== 0){
        readPos++;
    }

    return buff.toString('utf8', index, readPos);
    
};
module.exports = function(){

    //handle running commands
    this.run = (packet, client)=>{
        let cmd = readString(packet);
        this[cmd]( packet.subarray( Buffer.byteLength(cmd)+1 ), client ); //remove command string from buffer and run command
    }

    //all commands below
    this.log = (packet, client)=>{
        console.log(readString(packet));
    }

    this.echo = (packet, client)=>{
        client.socket.write( PACKET.build("log",packet) );
    }
    
}