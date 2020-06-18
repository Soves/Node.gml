module.exports = {

    formatString: (str)=>{
        return str+'\u0000';
    },

    build: (command, packet)=>{

        let buff = Buffer.from(command+'\u0000');
        buff = Buffer.concat([buff,packet]);

        let sizeBuff = Buffer.alloc(1);
        sizeBuff.writeUInt8(buff.length+1);
        return Buffer.concat([sizeBuff,buff]);

    }
}