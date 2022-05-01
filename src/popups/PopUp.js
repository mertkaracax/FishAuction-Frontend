import React from "react";
import "./PopUp.css";

function PopUp({ trigger }) {
	return trigger ? (
		<div className="popRoot">
			<div className="rectangle">
				<h3>Wrong username or password</h3>
			</div>
		</div>
	) : null;
}

export default PopUp;
