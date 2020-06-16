function onConnecting() {
	$("#snmp_status")
		.text("Conectando... ")
		.removeClass("text-danger text-success")
		.addClass("text-warning");
}
function onConnected() {
	$("#snmp_status")
		.text("Conectado")
		.removeClass("text-warning text-danger")
		.addClass("text-success");
	$("#url_socket").prop("disabled", false);
	// $("#btn_conn_socket").hide();
	// $("#btn_desc_socket").show();
}
function onDesconnect() {
	$("#snmp_status").text("Conexion perdida").addClass("text-danger");
	$("#url_socket").prop("disabled", true);
	// $("#btn_conn_socket").show();
	$("#btn_desc_socket").hide();
}
function onConnectionError() {
	$("#snmp_status")
		.text("URL Invalida")
		.removeClass("text-warning text-success")
		.addClass("text-danger");
}
// Toggle the side navigation
$("#sidebarToggle").on("click", function (e) {
	$("body").toggleClass("sidebar-toggled");
	$(".sidebar").toggleClass("toggled");
	if ($(".sidebar").hasClass("toggled")) {
		$(".sidebar .collapse").collapse("hide");
	}
});
