$("#btn_conn_socket").click(function () {
	var urlSocket = $.trim($("#url_socket").val());
	if (urlSocket == "") alert("Debes ingresar una URL");
	else {
		$("#snmp_status").text("Conectando... ");
		var socket = io.connect(urlSocket);
		socket.on("connect", (socketInfo) => {
			$("#snmp_status").text("Conectado");
			$("#url_socket").prop("disabled", false);
			// $("#btn_conn_socket").hide();
			// $("#btn_desc_socket").show();
		});
		socket.on("file:change", (data) => {
			console.log("File", data);
		});
		// socket.connect(urlSocket);
	}
});

$("#btn_desc_socket").click(function () {
	var urlSocket = $.trim($("#url_socket").val());
	var socket = io.disconnect();
	socket.on("disconnect", () => {
		$("#snmp_status").text("Conexion perdida");
		$("#url_socket").prop("disabled", true);
		// $("#btn_conn_socket").show();
		$("#btn_desc_socket").hide();
	});
});
