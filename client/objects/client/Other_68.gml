var t = async_load[? "type"];

if t = network_type_data{
	var recBuff = async_load[? "buffer"];

	var size = buffer_get_size(recBuff);
	buffer_copy(recBuff, 0, size, uncutPacket, buffer_sizeof(uncutPacket));

	if packetSize = 0{
		packetSize = buffer_read(uncutPacket, buffer_u8);
	}
	if packetSize <= size{
		var pkt = buffer_create(packetSize-1, buffer_fixed, 1);
		buffer_copy(uncutPacket, 1, packetSize-1, pkt, 0);
		
		if size-packetSize != 0{
			
			var _pkt_left = buffer_create(0,buffer_grow,1);
			buffer_copy(uncutPacket, packetSize, size-packetSize, _pkt_left, 0);
			
			buffer_delete(uncutPacket);
			uncutPacket = _pkt_left;
			
		}else{
		
			buffer_delete(uncutPacket);
			uncutPacket = buffer_create(0,buffer_grow,1);
			
		}
		
		var func = buffer_read(pkt, buffer_string);
		script_execute(asset_get_index(func),pkt);
	
		buffer_delete(pkt);
	}
}