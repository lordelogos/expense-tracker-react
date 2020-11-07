import React from "react";
import Expense from "./Expense";

export default function ExpenseList(props) {
	let list = props.list;
	return (
		<div className="expense-list">
			<h1 className="expense-list-label">History</h1>
			<div>
				{list.length > 0 ? (
					list.map((item) => (
						<Expense item={item} key={item.id} del={(id) => props.del(id)} />
					))
				) : (
					<p
						style={{
							fontStyle: "italic",
							color: "#ccc",
						}}>
						Get Started...
					</p>
				)}
			</div>
		</div>
	);
}
