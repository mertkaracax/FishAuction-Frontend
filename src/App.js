import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import CMember from "./pages/CMember";
import CHead from "./pages/CHead";
import RegisterFisherman from "./pages/RegisterFisherman";
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

function Root() {
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const usn = "cmember";
	const psw = "123";

	const usn2 = "chead";

	const [trigger, setTrigger] = useState(false);

	const handleSubmit = (event) => {
		// Prevent page reload
		event.preventDefault();

		var { uname, pass } = document.forms[0];

		if (uname.value == usn && pass.value == psw) {
			setLoading(true);
			setTimeout(() => {
				console.log("Giriş başarılı");
				navigate("/CMember");
				return true;
			}, 2000);
		} else if (uname.value == usn2 && pass.value == psw) {
			setLoading(true);
			setTimeout(() => {
				console.log("Giriş başarılı");
				navigate("/CHead");
				return true;
			}, 2000);
		} else {
			setTrigger(true);
			setTimeout(() => {
				setTrigger(false);
			}, 2000);
			return false;
		}
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
			<PopUp trigger={trigger}></PopUp>
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
				<Route path="/CMember" element={<CMember />}></Route>
				<Route
					path="/RegisterFisherman"
					element={<RegisterFisherman />}
				></Route>
				<Route path="/CHead" element={<CHead />}></Route>
				<Route path="/CreateCode" element={<CreateCode />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
