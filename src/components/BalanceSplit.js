import React from "react";

export default function BalanceSplit(props) {
	return (
		<div className="balance-split-main">
			<div>
				<p>INCOME</p>
				<p className="gre-text">${props.income.toFixed(2)}</p>
			</div>
			<div>
				<p>EXPENSE</p>
				<p className="red-text">${props.expenses.toFixed(2)}</p>
			</div>
		</div>
	);
}
