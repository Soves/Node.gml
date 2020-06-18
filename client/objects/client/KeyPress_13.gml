packet = packet_create( "echo");

packet_write( packet, buffer_string, "hello world!");

packet_send( socket, packet);
packet_destroy( packet);