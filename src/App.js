import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./pages/Register";
import {
	FaGithub,
	FaPhoneAlt,
	FaHome,
	FaTwitter,
	FaSistrix,
} from "react-icons/fa";
import "./styling/App.css";
import PopUp from "./popups/PopUp.js";

function App() {
	const usn = "mert";
	const psw = "123";
	const [username, setUsername] = useState("");
	let [password, setPassword] = useState("");
	const [trigger, setTrigger] = useState(false);

	// async function login() {
	// 	if (username != "mert" || password != psw) {
	// 		setTrigger(true);
	// 		setTimeout(() => {
	// 			setTrigger(false);
	// 		}, 2000);
	// 	} else {
	// 		console.log("Giriş başarılı");
	// 	}
	// }

	const width = window.innerWidth;
	const height = window.innerHeight;

	// useEffect(() => {
	// 	console.log("username: " + username, "password: " + password);
	// }, [username, password]);
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							{
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
											<FaTwitter
												className="icon"
												style={{
													width: "33%",
													height: "50%",
													color: "#256A98",
												}}
											></FaTwitter>
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
										<div className="form">
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
												style={{ marginBottom: "5%" }}
												onChange={(text) => setPassword(text)}
											/>
											<input
												// onClick={login}
												className="button"
												type="submit"
												value="LOGIN"
											/>
											<a href="#" className="link">
												Forgot Password
											</a>
											<span style={{ fontSize: 12 }}>or</span>
											<Link to={"/Register"} className="link">
												Sign Up
											</Link>
										</div>
									</div>
									<footer className="footer">
										<a
											href="https://github.com/canrollas/balik-mezati"
											className="a"
										>
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
							}
						</>
					}
				></Route>
				<Route path="/Register" element={<Register />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
