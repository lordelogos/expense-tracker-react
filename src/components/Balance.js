import React from "react";

export default function Balance(props) {
	return (
		<div className="balance-sub">
			<p>Your Balance:</p>
			<h1>${props.balance.toFixed(2)}</h1>
		</div>
	);
}
