
const commands = new new require('./commands.js');

module.exports = function(){

    this.packet = Buffer.alloc(0);
    this.packetSize = 0;

    //initialize
    this.init = (s)=>{
        console.log("init");
        this.socket = s;
    }

    //events
    this.error = ()=>{

    }
    
    this.data = (data)=>{
        this.packet = Buffer.concat( [ this.packet, data]);

        if (this.packetSize === 0) {
            this.packetSize = this.packet.readUInt8(0);
        }
        if (this.packetSize <= this.packet.length){

            //whole packet received and sent to execute
            let pkt = this.packet.subarray( 1, this.packetSize);

            //run command
            commands.run(pkt, this);

            //remove part that hase been used
            this.packet.slice( this.packetSize);
        }
    }

    this.close = ()=>{
        delete this;
    }
}