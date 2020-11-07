import React from "react";

export default class AddExpense extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			amount: "",
			income: false,
			id: "",
		};
	}

	render() {
		return (
			<div className="addForm">
				<h1 className="addForm-label">Add new transaction</h1>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						let newExp = {
							text: this.state.text,
							amount: this.state.amount,
							income: this.state.income,
							id: new Date() + this.state.text,
						};
						console.log(newExp);
						this.props.add(newExp);
						this.setState({
							text: "",
							amount: "",
							income: false,
						});
					}}>
					<div className="columns">
						<input
							type="text"
							placeholder="Enter text..."
							value={this.state.text}
							required
							onChange={(e) => {
								this.setState({ text: e.target.value });
							}}
						/>
					</div>
					<div className="columns">
						<input
							type="number"
							required
							placeholder="Enter amount..."
							value={this.state.amount}
							onChange={(e) => {
								this.setState({ amount: e.target.value });
							}}
						/>
					</div>
					<div className="rows">
						<label>Income</label>
						<input
							type="checkbox"
							checked={this.state.income}
							onChange={() =>
								this.setState({
									income: !this.state.income,
								})
							}
						/>
					</div>
					<button type="submit">Add Transaction</button>
				</form>
			</div>
		);
	}
}
