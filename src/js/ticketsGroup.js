import {dataTicketsGroup} from "../data/dataTicketsGroup";

export const ticketsGroup = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Tickets by Teo Group"
				},
				{}
			]
		},
		{
			view: "chart",
			css: "ticketsGroup",
			height: 194,
			type: "barH",
			padding: {left: 80, right: 15, top: 10, bottom: 30},
			color: "#color#",
			xAxis: {
				start: 0,
				step: 10,
				end: 90,
				property: "#value#"
			},
			yAxis: {
				template: "#title#",
				lines: false
			},
			barWidth: 20,
			data: dataTicketsGroup
		}
	]
};
