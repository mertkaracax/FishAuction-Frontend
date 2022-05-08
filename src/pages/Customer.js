import React from "react";
import "../styling/CMember.css";
import { useNavigate } from "react-router-dom";

const width = window.innerWidth;
const height = window.innerHeight;

function Customer() {
	const navigate = useNavigate();
	return (
		<div className="root1" style={{ width: width, height: height }}>
			<div className="header1">Online Fish Auction System</div>
			<div className="left-menu">
				<span
					style={{
						marginTop: "10%",
						marginBottom: "25%",
						color: "#d3dce0",
					}}
				>
					Dashboard
				</span>
				<a className="menu-btn" style={{ color: "white" }}>
					<p>Homepage</p>
				</a>
				<a
					className="menu-btn"
					onClick={() => {
						console.log("Button clicked");
					}}
				>
					<p>Customer 1</p>
				</a>
				<a
					onClick={() => {
						console.log("BUTTON CLICKED");
					}}
					className="menu-btn"
				>
					<p>Customer 2</p>
				</a>
				<a
					style={{
						position: "absolute",
						bottom: "2%",
						color: "#d3dce0",
						width: "90%",
						textAlign: "center",
						height: "5%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center ",
					}}
					onClick={() => {
						navigate("/");
					}}
				>
					<p>Log out</p>
				</a>
			</div>
			<div className="mid-part">
				<div className="box1">
					<div className="list-item">
						Auction Date: 23.03.2022 &nbsp;&nbsp; Auction Time: 14.04
						&nbsp;&nbsp;{" "}
						<span style={{ color: "#AF862E" }}>Completed</span>
					</div>
					<div className="list-item">
						Auction Date: 23.03.2022 &nbsp;&nbsp; Auction Time: 14.04
						&nbsp;&nbsp;&nbsp;{" "}
						<span style={{ color: "#AF862E" }}>Completed</span>
					</div>
					<div className="list-item">
						Auction Date: 23.03.2022 &nbsp;&nbsp; Auction Time: 14.04
						&nbsp;&nbsp;&nbsp;{" "}
						<span style={{ color: "#AF862E" }}>Completed</span>
					</div>
					<div className="list-item">
						Auction Date: 23.03.2022 &nbsp;&nbsp; Auction Time: 14.04
						&nbsp;&nbsp;&nbsp;{" "}
						<span style={{ color: "#AF862E" }}>Completed</span>
					</div>
					<div className="list-item">
						Auction Date: 23.03.2022 &nbsp;&nbsp; Auction Time: 14.04
						&nbsp;&nbsp;&nbsp;{" "}
						<span style={{ color: "#AF862E" }}>Completed</span>
					</div>
					<div style={{ marginBottom: "5%" }} className="list-item">
						Auction Date: 23.03.2022 &nbsp;&nbsp; Auction Time: 14.04
						&nbsp;&nbsp;&nbsp;{" "}
						<span style={{ color: "#AF862E" }}>Completed</span>
					</div>
					<div className="list-item">
						Upcoming Auction: <br></br> Date: 28.05.2022
					</div>
				</div>
			</div>
		</div>
	);
}

export default Customer;
