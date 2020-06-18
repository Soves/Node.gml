
//connect
socket = network_create_socket(network_socket_tcp);

network_set_config(network_config_use_non_blocking_socket, true);
network_connect_raw(socket, LOCALHOST, PORT);

uncutPacket = buffer_create(0,buffer_grow,1);
packetSize = 0;