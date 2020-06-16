$("#btn_conn_socket").click(function () {
	var urlSocket = $.trim($("#url_socket").val());
	if (urlSocket == "") alert("Debes ingresar una URL");
	else {
		$("#snmp_status").text("Conectando... ");
		SetSocketConnection(urlSocket);
	}
});

var graph = Morris.Line({
	element: "tcpChart",
	data: data(),
	xkey: "Fecha",
	ykeys: ["tcpInSegs", "tcpOutSegs"],
	labels: ["tcpInSegs", "tcpOutSegs"],
	resize: true,
	parseTime: false,
	hideHover: true,
	xLabelAngle: 60,
	lineColors: ["#FA8E33", "#FA3220"],
});
function data() {
	var ret = [];
	for (var x = 0; x <= 25; x++) {
		ret.push({
			Fecha: x,
			tcpInSegs: Math.random() * 6,
			tcpOutSegs: Math.random() * 5,
		});
	}
	return ret;
}
function update() {
	graph.setData(data());
}
// setInterval(update, 1000);

// UDP
var graphUDP = Morris.Line({
	element: "udpChart",
	data: dataUDP(),
	xkey: "Fecha",
	ykeys: ["updpInSegs", "udpOutSegs"],
	labels: ["updpInSegs", "udpOutSegs"],
	resize: true,
	parseTime: false,
	hideHover: true,
	xLabelAngle: 60,
	lineColors: ["#4B3BFA", "#30FA59"],
});
function dataUDP() {
	var ret = [];
	for (var x = 0; x <= 15; x++) {
		ret.push({
			Fecha: x,
			updpInSegs: Math.random() * 1,
			udpOutSegs: Math.random() * 2,
		});
	}
	return ret;
}
function updateUDP() {
	graphUDP.setData(dataUDP());
}

// setInterval(updateUDP, 1000);
