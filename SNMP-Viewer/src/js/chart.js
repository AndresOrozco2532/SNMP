function AdaptData(data) {
	if (data.Datos) {
		AdaptElements(data);
		var tcpData = [];
		var udpData = [];
		if (data.Datos.length > 25) {
			data.Datos = data.Datos.slice(data.Datos.length - 25);
		}
		data.Datos.map((info) => {
			// console.log(info);
			tcpData.push({
				Fecha: info.Fecha,
				tcpInSegs: info.tcpInSegs,
				tcpOutSegs: info.tcpOutSegs,
			});

			udpData.push({
				Fecha: info.Fecha,
				udpInSegs: info.udpInSegs,
				udpOutSegs: info.udpOutSegs,
			});
		});

		graphTCP.setData(tcpData);
		graphUDP.setData(udpData);
	}
}

function AdaptElements(data) {
	$("#empty-container").hide();
	// $("#graphics-container").show();
	$("#graphics-container").css("visibility", "visible");
	$("#machine_name_tcp").empty();
	$("#machine_name_udp").empty();
	$("#machine_name_tcp").append(`${data.Datos[0].Maquina}`);
	$("#machine_name_udp").append(`${data.Datos[0].Maquina}`);
	$("#time_tcp").empty();
	$("#time_udp").empty();
	$("#time_tcp").append(
		`Inicio: ${data.Datos[0].Fecha} <br/> Fin: ${
			data.Datos[data.Datos.length - 1].Fecha
		}`
	);
	$("#time_udp").append(
		`Inicio: ${data.Datos[0].Fecha} <br/> Fin: ${
			data.Datos[data.Datos.length - 1].Fecha
		}`
	);
}

$("#graphics-container").css("visibility", "hidden");
$("#empty-container").show();
var graphTCP = Morris.Line({
	element: "tcpChart",
	data: dataInitialTCP,
	xkey: "Fecha",
	ykeys: ["tcpInSegs", "tcpOutSegs"],
	labels: ["tcpInSegs", "tcpOutSegs"],
	resize: true,
	parseTime: false,
	hideHover: true,
	xLabelAngle: 60,
	lineColors: ["#FA8E33", "#FA3220"],
	hideHover: false,
});

// UDP
var graphUDP = Morris.Line({
	element: "udpChart",
	data: dataInitialUDP,
	xkey: "Fecha",
	ykeys: ["udpInSegs", "udpOutSegs"],
	labels: ["udpInSegs", "udpOutSegs"],
	resize: true,
	parseTime: false,
	hideHover: true,
	xLabelAngle: 60,
	lineColors: ["#4B3BFA", "#30FA59"],
	hideHover: false,
});

// Initial Values
var dataInitialTCP = [
	{
		Fecha: "",
		tcpInSegs: "",
		tcpOutSegs: "",
		upTime: "",
	},
];

var dataInitialUDP = [
	{
		Fecha: "",
		udpInSegs: "",
		udpOutSegs: "",
		upTime: "",
	},
];
