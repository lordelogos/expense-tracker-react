import React from "react";

export default function Expense(props) {
	let item = props.item;
	let style1 = {
		position: "relative",
		background: "white",
		width: "calc(100% - 15px)",
		height: 40,
		display: "flex",
		justifyContent: "space-between",
		borderRight: "solid 5px #36eb6c",
		alignItems: "center",
		marginBottom: "5px",
		padding: "0 5px",
		WebkitBoxShadow: "2px 1px 3px -2px rgba(0,0,0,0.81)",
		boxShadow: "2px 1px 3px -2px rgba(0,0,0,0.81)",
	};

	let style2 = {
		position: "relative",
		background: "white",
		width: "calc(100% - 15px)",
		height: 40,
		display: "flex",
		justifyContent: "space-between",
		borderRight: "solid 5px rgb(248, 58, 58)",
		alignItems: "center",
		marginBottom: "5px",
		padding: "0 5px",
		WebkitBoxShadow: "2px 1px 3px -2px rgba(0,0,0,0.81)",
		boxShadow: "2px 1px 3px -2px rgba(0,0,0,0.81)",
	};

	return (
		<div style={item.income ? style1 : style2} className="exp">
			<button className="del-btn" onClick={() => props.del(item.id)}>
				X
			</button>
			<p
				style={{
					fontWeight: "400",
					fontSize: 18,
				}}>
				{item.text}
			</p>
			<p
				style={{
					fontWeight: "600",
					fontSize: 18,
				}}>
				${item.amount}
			</p>
		</div>
	);
}
