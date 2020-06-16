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
	if (data) {
		var propStr = "";
		// var prop = JSON.parse(Object.getOwnPropertyNames(data.Datos[0]));
		// console.log(prop);
		// $("#graphics-container").show();
		$("#empty-container").hide();
		$("#graphics-container").css("visibility", "visible");
		$("#machine_name").empty();
		$("#machine_name").append(`${data.Datos[0].Maquina}`);
		$("#time_graphic").empty();
		$("#time_graphic").append(
			`Inicio: ${data.Datos[0].Fecha} <br/> Fin: ${
				data.Datos[data.Datos.length - 1].Fecha
			}`
		);
		$("#time_machine").empty();
		$("#time_machine").append(`${data.Datos[data.Datos.length - 1].upTime}`);
		$("#variables").empty();
		$("#variables").append(`${propStr}`);
	}
}

function ConvertTickToDate() {}

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
