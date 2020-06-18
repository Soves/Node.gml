///create a network packet
///@arg command_name

var _buff = buffer_create( 1, buffer_grow, 1);
buffer_seek( _buff, buffer_seek_start, 1);

buffer_write( _buff, buffer_string, argument0);

return _buff;