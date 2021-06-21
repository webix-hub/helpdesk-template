import {dataMyTicketsInbox} from "../data/dataMyTicketsInbox";

export const myTicketsInbox = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "My Tickets"
				},
				{}
			]
		},
		{
			view: "list",
			height: 179,
			scroll: false,
			css: "myTicketInbox",
			select: true,
			template: "<span>#title#</span><span class='inboxLetter'>#incoming#</span>",
			on: {
				onAfterLoad() {
					this.select(1);
				}
			},
			data: dataMyTicketsInbox
		}
	]
};
