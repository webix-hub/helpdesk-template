import {header} from "./js/header";
import {helpDeskOverview} from "./js/helpDeskOverview";
import {openTicketsOverview} from "./js/openTicketsOverview";
import {myTicketsInbox} from "./js/myTicketsInbox";
import {ticketsGroup} from "./js/ticketsGroup";
import {myFeedback} from "./js/myFeedback";
import {myTicketsTable} from "./js/myTicketsTable";
import {userMenu} from "./js/userMenu";
import "./js/headerCheckbox";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		rows: [
			header,
			{
				type: "space",
				rows: [
					{
						height: 210,
						margin: 10,
						cols: [
							helpDeskOverview,
							openTicketsOverview
						]
					},
					{
						margin: 10,
						cols: [
							{
								view: "scrollview",
								width: 488,
								body: {
									type: "wide",
									margin: 10,
									rows: [
										myTicketsInbox,
										ticketsGroup,
										myFeedback
									]
								}
							},
							myTicketsTable
						]
					}
				]
			}
		]
	});

	webix.ui(userMenu);
});
