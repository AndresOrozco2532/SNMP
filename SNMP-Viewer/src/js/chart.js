function AdaptData(data) {
	if (data.Datos) {
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
