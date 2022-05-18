import React from "react";
import { useNavigate } from "react-router-dom";
import { GrRefresh } from "react-icons/gr";
import { useState } from "react";
import "../styling/CHead.css";

import PopUp from "../popups/PopUp";

const width = window.innerWidth;
const height = window.innerHeight;

function ScheduleAuction() {
	const navigate = useNavigate();

	const [trigger, setTrigger] = useState(false);
	const [errorMessage, setErrorMessage] = useState("Default error message");

	function handleSubmit(event) {
		event.preventDefault();

		var { name, date, id, quota, time } = document.forms[0];
		const x = date.value.split(".");
		var datum = new Date(Date.UTC(x[2], x[0], x[1], "0", "0", "0"));
		const last = datum.getTime() / 1000;
		const y = time.value.split(".");
		const last2 = parseInt(y[0]) * 3600 + parseInt(y[1]) * 60;

		const last3 = last + last2;

		fetch(`http://190.92.179.153:8080/api/auction/add`, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({
				name: name.value,
				date: last3.toString(),
				id: id.value,
				quota: quota.value,
			}),
		})
			.then((res) => {
				if (res.status == 200) {
					console.log("başarılı");
					setTrigger(true);
					setErrorMessage("Auction saved");
					setTimeout(() => {
						setTrigger(false);
					}, 2000);
				}
				res.json();
			})
			.then((json) => {
				console.log(json);
				if (json.status == 200) {
					console.log("status ok");
					console.log(json);
				} else {
					console.log("hata verdi");
				}
			});
		return 1;
	}
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
						navigate("/CHead");
					}}
				>
					<p>Homepage</p>
				</a>
				<a
					className="menu-btn"
					onClick={() => {
						navigate("/CreateCode");
					}}
				>
					<p>Create Code</p>
				</a>
				<a
					className="menu-btn"
					onClick={() => {
						navigate("/CreateCode");
					}}
				>
					<p style={{ color: "white" }}>Schedule Auction Code</p>
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
					Log out
				</a>
			</div>
			<div className="mid-part" style={{ alignItems: "center" }}>
				<form onSubmit={handleSubmit} className="form">
					<input
						className="textInput"
						placeholder="Name"
						type="text"
						name="name"
					/>
					<input
						className="textInput"
						placeholder="Date"
						type="text"
						name="date"
					/>
					<input
						className="textInput"
						placeholder="Time"
						type="text"
						name="time"
					/>
					<input
						className="textInput"
						placeholder="Id"
						type="text"
						name="id"
					/>
					<input
						className="textInput"
						placeholder="Quota"
						type="text"
						name="quota"
						style={{ marginBottom: "5%" }}
					/>
					<input className="button" type="submit" value="SAVE" />
				</form>
			</div>
			<PopUp message={errorMessage} trigger={trigger}></PopUp>
		</div>
	);
}

export default ScheduleAuction;
