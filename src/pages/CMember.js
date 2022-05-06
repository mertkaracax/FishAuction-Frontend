import React from "react";
import "../styling/CMember.css";
import { useNavigate } from "react-router-dom";

const width = window.innerWidth;
const height = window.innerHeight;

function CMember() {
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
				<a className="menu-btn">
					<p>Register Fish</p>
				</a>
				<a
					onClick={() => {
						navigate("/RegisterFisherman");
					}}
					className="menu-btn"
				>
					<p>Register Fisherman</p>
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
			<div className="mid-part"></div>
		</div>
	);
}

export default CMember;
