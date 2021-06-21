import {dataMyTicketsTable} from "../data/dataMyTicketsTable";

export const myTicketsTable = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "My Tickets - New - 66 tickets"
				},
				{}
			]
		},
		{
			view: "datatable",
			css: "myTicketsTable webix_data_border webix_header_border",
			type: {
				customCheckbox(obj, common, value) {
					if (value) return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-marked"></span>';
					return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-blank-outline"></span>';
				},
				customerTemplate(obj) {
					return `<div class="flex customer">
						<div class="customerAvatar"><img src="./users/${obj.avatar}" /></div>
						<span class="strong">${obj.customer}</span>
					</div>`;
				},
				priorityTemplate(obj) {
					let html = [];
					for (let star = 0; star < obj.priority; star++) {
						html.push('<span class="webix_icon mdi mdi-star starColor"></span>');
					}
					return html.join("");
				}
			},
			checkboxRefresh: true,
			columns: [
				{id: "ch1", header: {content: "masterCheckbox"}, template: "{common.customCheckbox()}", width: 41},
				{id: "customer", header: "Customer", width: 210, template: "{common.customerTemplate()}"},
				{id: "subject", header: "Subject", minWidth: 360, fillspace: true, template: "<span class='ellipsis'>#subject#</span>"},
				{id: "assigned", header: "Assigned", width: 122},
				{id: "id", header: "ID", width: 84},
				{id: "create", header: "Created", width: 122},
				{id: "status", header: {text: "Status", css: "flexCol"}, width: 94, css: "flexCol", template: "<span class='status #status#'>#status#</span>"},
				{id: "priority", header: "Priority", width: 108, template: "{common.priorityTemplate()}"}
			],
			rowHeight: 54,
			data: dataMyTicketsTable
		}
	]
};
