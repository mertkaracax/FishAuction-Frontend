import React from "react";
import "../styling/RegisterFisherman.css";
import { useNavigate, Link } from "react-router-dom";

const width = window.innerWidth;
const height = window.innerHeight;

function RegisterFisherman() {
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
				<a
					className="menu-btn"
					onClick={() => {
						navigate("/CMember");
					}}
				>
					<p>Homepage</p>
				</a>
				<a className="menu-btn">Register Fish</a>
				<a className="menu-btn" style={{ color: "white" }}>
					<p>Register Fisherman</p>
				</a>
				<a
					onClick={() => {
						navigate("/");
					}}
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
				>
					<p>Log out </p>
				</a>
			</div>
			<div className="mid-part">
				<form className="form">
					<input
						className="textInput1"
						placeholder="Name"
						type="text"
						name="uname"
						required
					/>
					<input
						className="textInput1"
						placeholder="Surname"
						type="password"
						name="pass"
						required
					/>
					<input
						className="textInput1"
						placeholder="Address"
						type="password"
						name="pass"
						required
					/>
					<input
						className="textInput1"
						placeholder="Bank Account"
						type="password"
						name="pass"
						required
						style={{ marginBottom: "4%" }}
					/>
					<input className="button1" type="submit" value="REGISTER" />
				</form>
			</div>
		</div>
	);
}

export default RegisterFisherman;
