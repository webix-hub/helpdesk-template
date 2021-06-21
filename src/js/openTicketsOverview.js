import {dataOpenTicketsOverview} from "../data/dataOpenTicketsOverview";

export const openTicketsOverview = {
	gravity: 0.7,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Open Tickets Overview"
				},
				{}
			]
		},
		{
			view: "chart",
			type: "bar",
			padding: {left: 30, right: 15, top: 15, bottom: 30},
			xAxis: {
				template: "#value3#"
			},
			yAxis: {
				start: 1,
				step: 1,
				end: 5,
				template(obj) {
					return parseFloat(obj).toFixed(1);
				}
			},
			barWidth: 18,
			series: [
				{
					value: "#value1#",
					color: "#8664c6",
					tooltip: {
						template: "#value1#"
					}
				},
				{
					value: "#value2#",
					color: "#1ca1c1",
					tooltip: {
						template: "#value2#"
					}
				}
			],
			data: dataOpenTicketsOverview
		}
	]
};
