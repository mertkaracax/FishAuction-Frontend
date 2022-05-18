import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import CMember from "./pages/CMember";
import CHead from "./pages/CHead";
import RegisterFisherman from "./pages/RegisterFisherman";
import Customer from "./pages/Customer";
import Fisherman from "./pages/Fisherman";
import {
	FaGithub,
	FaPhoneAlt,
	FaHome,
	FaTwitter,
	FaSistrix,
} from "react-icons/fa";
import "./styling/App.css";
import PopUp from "./popups/PopUp.js";
import { useNavigate } from "react-router-dom";
import CreateCode from "./pages/CreateCode";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import auth from "./Authentication/Auth";
import ScheduleAuction from "./pages/ScheduleAuction";
import "./popups/PopUp.css";

function Root() {
	// useEffect(() => {
	// 	// let headers = new Headers();
	// 	// headers.append("Content-Type", "application/json");
	// 	// headers.append("Accept", "application/json");
	// 	// headers.append("Origin", "http://localhost:3000");
	// 	// console.log(headers);
	// 	fetch("http://190.92.179.153:8080/api/loginget/Admin/lorem_ipsum")
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			console.log(json);
	// 		});
	// }, []);

	// useEffect(() => {
	// 	const instance = axios.create({
	// 		httpsAgent: new https.Agent({
	// 			rejectUnauthorized: false,
	// 		}),
	// 	});
	// 	instance.get(
	// 		"http://190.92.179.153:8080/api/login/customer/canrollas/123can123"
	// 	);

	// 	// At request level
	// 	const agent = new https.Agent({
	// 		rejectUnauthorized: false,
	// 	});
	// 	axios.get(
	// 		"http://190.92.179.153:8080/api/login/customer/canrollas/123can123",
	// 		{ httpsAgent: agent }
	// 	);
	// }, []);

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const [trigger, setTrigger] = useState(false);
	const [errorMessage, setErrorMessage] = useState("Default error message");

	const handleSubmit = (event) => {
		// Prevent page reload
		event.preventDefault();
		var { uname, pass } = document.forms[0];
		setLoading(true);
		if (uname.value.length < 3) {
			setTrigger(true);
			setErrorMessage("Username can not be less than three characters.");
			setTimeout(() => {
				setLoading(false);
				setTrigger(false);
			}, 2000);
			return false;
		}
		fetch(
			`http://190.92.179.153:8080/api/loginget/${uname.value}/${pass.value}`
		)
			.then((res) => res.json())
			.then((json) => {
				console.log(uname.value);
				console.log(pass.value);
				console.log(json);

				if (json.status == 200) {
					if (json.userType == "CooperativeHead") {
						setTimeout(() => {
							console.log("Cooperative head logged in");
							auth.login();
							navigate("/CHead");
							return true;
						}, 2000);
					} else if (json.userType == "Customer") {
						setTimeout(() => {
							console.log("Customer logged in");
							auth.login();
							navigate("/Customer");
							return true;
						}, 2000);
					} else if (json.userType == "fisherman") {
						setTimeout(() => {
							console.log("Fisherman logged in");
							auth.login();
							navigate("/Fisherman");
							return true;
						}, 2000);
					} else if (json.userType == "cooperativeMember") {
						setTimeout(() => {
							console.log("Cooperative member logged in");
							auth.login();
							navigate("/CMember");
							return true;
						}, 2000);
					}
				} else {
					setTrigger(true);
					if (json.message == "Username does not exists!") {
						setErrorMessage("Username does not exists!");
					} else {
						setErrorMessage("Username or password is incorrect");
					}
					setTimeout(() => {
						setTrigger(false);
						setLoading(false);
					}, 2000);
				}
			});

		// if (uname.value == "mert" && pass.value == "1") {      ÇAĞATAY EKLEMESİ
		// 	//json.status == 200
		// 	console.log("status ok");
		// 	// console.log(json);
		// 	if (true) {
		// 		//json.userType == "CooperativeHead"
		// 		Authentication.registerLoginSuccessful(uname.value, "customer");
		// 		if (Authentication.isAnyLaggedIn()) {
		// 			console.log("user logged in");
		// 		}
		// 		setTimeout(() => {
		// 			console.log("Giriş başarılı");
		// 			navigate("/Customer");
		// 			return true;
		// 		}, 2000);
		// 	}
		// } else {
		// 	setTrigger(true);
		// 	setTimeout(() => {
		// 		setTrigger(false);
		// 	}, 2000);
		// }

		// if (uname.value == usn && pass.value == psw) {
		// 	setLoading(true);
		// 	setTimeout(() => {
		// 		console.log("Giriş başarılı");
		// 		navigate("/ProtectedRoute"); //CMember
		// 		return true;
		// 	}, 2000);
		// } else if (uname.value == usn2 && pass.value == psw) {
		// 	setLoading(true);
		// 	setTimeout(() => {
		// 		console.log("Giriş başarılı");
		// 		auth.login();
		// 		navigate("/CHead");
		// 		return true;
		// 	}, 2000);
		// } else if (uname.value == usn3 && pass.value == psw) {
		// 	console.log("Giriş başarılı");
		// 	navigate("/Customer");
		// } else if (uname.value == usn4 && pass.value == psw) {
		// 	console.log("Giriş başarılı");
		// 	navigate("/Fisherman");
		// } else {
		// 	setTrigger(true);
		// 	setTimeout(() => {
		// 		setTrigger(false);
		// 	}, 2000);
		// 	return false;
		// }
	};

	const width = window.innerWidth;
	const height = window.innerHeight;

	// useEffect(() => {
	// 	console.log("username: " + username, "password: " + password);
	// }, [username, password]);
	return (
		<div
			className="root"
			style={{
				height: height,
				width: width,
				position: "relative",
			}}
		>
			<FadeLoader
				css={{ position: "fixed", top: "50%", left: "50%", zIndex: 1 }}
				color="purple"
				loading={loading}
				size={40}
			/>
			<div
				className="header"
				style={{
					position: "absolute",
					top: "0%",
					fontSize: 25,
					color: "white",
				}}
			>
				<div className="header-block">
					<FaHome
						className="icon"
						style={{
							width: "33%",
							height: "50%",
							color: "#256A98",
						}}
					></FaHome>
				</div>
				<div className="header-block">
					<FaSistrix
						className="icon"
						style={{
							width: "33%",
							height: "50%",
							color: "#256A98",
						}}
					></FaSistrix>
				</div>
				<div className="header-block">
					<FaGithub
						className="icon"
						style={{
							width: "33%",
							height: "50%",
							color: "#256A98",
						}}
					></FaGithub>
				</div>
				<div className="header-block">
					<FaPhoneAlt
						className="icon"
						style={{
							width: "33%",
							height: "50%",
							color: "#256A98",
						}}
					></FaPhoneAlt>
				</div>
			</div>
			<div
				className="box"
				style={{
					width: width / 2.2,
					height: height / 1.4,
					backgroundColor: "white" /*DBE1E5*/,
				}}
			>
				<form onSubmit={handleSubmit} className="form">
					<input
						className="textInput"
						placeholder="Username"
						type="text"
						name="uname"
						required
					/>
					<input
						className="textInput"
						placeholder="Password"
						type="password"
						name="pass"
						required
						style={{ marginBottom: "5%" }}
					/>
					<input className="button" type="submit" value="LOGIN" />
					<a
						onClick={() => {
							navigate("/ResetPassword");
						}}
						className="link"
					>
						Forgot Password
					</a>
					<span style={{ fontSize: 12 }}>or</span>
					<Link to={"/Register"} className="link">
						Sign Up
					</Link>
				</form>
			</div>
			<footer className="footer">
				<a href="https://github.com/canrollas/balik-mezati" className="a">
					<FaGithub size={25} />
				</a>
				<p
					style={{
						fontSize: 13,
						marginLeft: 14,
						fontWeight: 500,
						color: "black",
					}}
				>
					~ CENG316 Group 01
				</p>
			</footer>
			<PopUp trigger={trigger} message={errorMessage}></PopUp>
		</div>
	);
}

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Root />}></Route>
				<Route path="/Register" element={<Register />}></Route>
				<Route path="/ResetPassword" element={<ResetPassword />}></Route>
				<Route
					path="/CMember"
					element={
						<ProtectedRoute>
							<CMember />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path="/RegisterFisherman"
					element={<RegisterFisherman />}
				></Route>

				{/* <Route path="/CHead" element={<CHead />}></Route> */}

				<Route
					path="/CreateCode"
					element={
						<ProtectedRoute>
							<CreateCode />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path="/Customer"
					element={
						<ProtectedRoute>
							<Customer />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path="/Fisherman"
					element={
						<ProtectedRoute>
							<Fisherman />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path="/CHead"
					element={
						<ProtectedRoute>
							<CHead />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path="/ScheduleAuction"
					element={<ScheduleAuction />}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
