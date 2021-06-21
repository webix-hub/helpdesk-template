import {dataHelpDeskOverview} from "../data/dataHelpDeskOverview";

export const helpDeskOverview = {
	css: "bgWhite",
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Help Desk Overview"
				},
				{}
			]
		},
		{
			cols: [
				{
					view: "datatable",
					css: "webix_data_border webix_header_border",
					maxWidth: 360,
					type: {
						myTicketsTemplate(obj) {
							return `<div class="flex spaceBetween">
								<span>${obj.myTickets.name}</span>
								<span>${obj.myTickets.val}</span>
							</div>`;
						}
					},
					columns: [
						{id: "myTickets", header: "My Tickets", minWidth: 146, fillspace: true, template: "{common.myTicketsTemplate()}"},
						{id: "avgOpenHours", header: "Avg Open Hours", fillspace: true},
						{id: "slaFailed", header: "SLA Failed", width: 90}
					],
					headerRowHeight: 35,
					rowHeight: 44,
					data: dataHelpDeskOverview
				},
				{
					view: "template",
					width: 12
				},
				{
					view: "datatable",
					css: "webix_data_border webix_header_border",
					type: {
						myPerformanceTemplate(obj) {
							return `<div class="flex spaceBetween">
								<span>${obj.myPerformance.name}</span>
								<span>${obj.myPerformance.val}</span>
							</div>`;
						}
					},
					columns: [
						{id: "myPerformance", header: "My Performance", minWidth: 178, fillspace: true, template: "{common.myPerformanceTemplate()}"},
						{id: "avg7days", header: "Avg 7 Days", maxWidth: 98, fillspace: true},
						{id: "dailyTarget", header: "Daily target", maxWidth: 108, fillspace: true},
						{id: "income", header: "", template: webix.Sparklines.getTemplate({type: "splineArea", radius: 2, color: "#1CA1C1"}), minWidth: 150, fillspace: true}
					],
					headerRowHeight: 35,
					rowHeight: 44,
					data: dataHelpDeskOverview
				}
			]
		}
	]
};
