const dataPositive = [
	{value: "70", color: "#8664C6"},
	{value: "30", color: "#DADEE0"}
];
const dataNegative = [
	{value: "70", color: "#DADEE0"},
	{value: "30", color: "#FF5C4C"}
];

export const myFeedback = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "My Feedback"
				},
				{}
			]
		},
		{
			height: 226,
			type: "clean",
			cols: [
				{
					view: "chart",
					type: "donut",
					value: "#value#",
					color: "#color#",
					padding: {top: 15, left: 5, right: 5, bottom: 10},
					innerRadius: 60,
					legend: {
						layout: "x",
						toggle: false,
						values: [
							{text: "70% Positive", color: "#8664C6"}
						],
						marker: {type: "round", width: 4, height: 4},
						valign: "middle",
						align: "center"
					},
					data: dataPositive
				},
				{
					view: "chart",
					type: "donut",
					value: "#value#",
					color: "#color#",
					padding: {top: 15, left: 5, right: 5, bottom: 10},
					innerRadius: 60,
					legend: {
						layout: "x",
						toggle: false,
						values: [
							{text: "30% Negative", color: "#FF5C4C"}
						],
						marker: {type: "round", width: 4, height: 4},
						valign: "middle",
						align: "center"
					},
					data: dataNegative
				}
			]
		}
	]
};
