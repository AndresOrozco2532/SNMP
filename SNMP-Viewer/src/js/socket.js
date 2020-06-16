$("#btn_conn_socket").click(function () {
	var urlSocket = $.trim($("#url_socket").val());
	if (urlSocket == "") alert("Debes ingresar una URL");
	else {
		onConnecting();
		var socket = io.connect(urlSocket);
		socket.on("connect", (socketInfo) => {
			onConnected();
		});

		socket.io.on("connect_error", function (err) {
			onConnectionError();
			socket.disconnect();
		});

		socket.on("file:change", (data) => {
			AdaptData(JSON.parse(data));
		});
	}
});

$("#btn_desc_socket").click(function () {
	var urlSocket = $.trim($("#url_socket").val());
	var socket = io.disconnect();
	socket.on("disconnect", () => {
		onDesconnect();
	});
});
