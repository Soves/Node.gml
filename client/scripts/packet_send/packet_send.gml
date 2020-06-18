///@arg socket
///@arg packet
var _socket = argument0, _buff = argument1;

var _size = buffer_tell(_buff)+1;

buffer_seek( _buff, buffer_seek_start, 0);
buffer_write( _buff, buffer_u8, _size);

network_send_raw(_socket, _buff, _size);