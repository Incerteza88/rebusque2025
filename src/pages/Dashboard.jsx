import React from "react";
import {PanelSideBar} from "../components/panel-components/PanelSideBar"
import {PanelContent} from "../components/panel-components/PanelContent"

//include images into your bundle

//create your first component
const Dashboard = () => {

	return (
		<div className="container">

	<div className="px-3 pt-2 pb-5 row g-4">
			<PanelSideBar/>
			<PanelContent/>
			
		</div>
	</div>
	);
};

export default Dashboard;