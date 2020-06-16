function SetSocketConnection(connection) {
	var socket = io.connect(connection);

	socket.on("connect", (socketInfo) => {
		$("#snmp_status").text("Conectado");
	});

	socket.on("disconnect", () => {
		$("#snmp_status").text("Conexion perdida");
	});

	socket.on("file:change", (data) => {
		console.log(data);
	});
}
