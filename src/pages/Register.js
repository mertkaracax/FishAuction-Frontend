import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../styling/Register.css";

function Register() {
	const [role, setRole] = useState("Customer");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [code, setCode] = useState("");

	function selectCustomer() {
		setRole("Customer");
	}

	function selectCoopMember() {
		setRole("Cooperative Member");
	}

	const width = window.innerWidth;
	const height = window.innerHeight;
	return (
		<div
			className="root"
			style={{
				height: height,
				width: width,
				position: "relative",
			}}
		>
			<div
				className="header"
				style={{
					position: "absolute",
					top: "4%",
					fontSize: 25,
					color: "white",
				}}
			></div>
			<div
				className="box"
				style={{
					width: width / 2.2,
					height: height / 1.4,
				}}
			>
				<p>Role: {role}</p>
				<div className="checkbox">
					<div
						className="checkbox-item"
						style={{
							backgroundColor: role == "Customer" ? "#2d89de" : "white",
							color: role == "Customer" ? "white" : "black",
						}}
						onClick={selectCustomer}
					>
						Customer
					</div>
					<div
						style={{
							backgroundColor:
								role == "Cooperative Member" ? "#2d89de" : "white",
							color: role == "Cooperative Member" ? "white" : "black",
						}}
						className="checkbox-item"
						onClick={selectCoopMember}
					>
						Cooperative Member
					</div>
				</div>
				<form className="form">
					<input
						className="textInput"
						placeholder="Email"
						type="text"
						name="email"
						onChange={(text) => setEmail(text)}
					/>
					<input
						className="textInput"
						placeholder="Username"
						type="text"
						name="username"
						onChange={(text) => setUsername(text)}
					/>
					<input
						className="textInput"
						placeholder="Password"
						type="password"
						name="password"
						onChange={(text) => setPassword(text)}
					/>
					<input
						className="textInput"
						placeholder="Address"
						type="text"
						name="address"
						onChange={(text) => setAddress(text)}
					/>
					{role == "Cooperative Member" ? (
						<input
							className="textInput"
							placeholder="Cooperative Code"
							type="text"
							name="code"
							onChange={(text) => setCode(text)}
						/>
					) : null}
					<input className="button" type="submit" value="SIGN UP" />
					<Link to="/" className="link">
						Already have an account?
					</Link>
				</form>
			</div>
		</div>
	);
}

export default Register;
