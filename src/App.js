import React, { Component } from "react";
import Balance from "./components/Balance";
import BalanceSplit from "./components/BalanceSplit";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			balance: 0,
			expenses: 0,
			income: 0,
			expenseList: [],
		};
	}

	expenseChange = (amount) => {
		let newBalance = parseInt(this.state.balance) - parseInt(amount);
		let newExpenses = parseInt(this.state.expenses) + parseInt(amount);
		this.setState({
			expenses: newExpenses,
			balance: newBalance,
		});
	};

	incomeChange = (amount) => {
		let newBalance = parseInt(this.state.balance) + parseInt(amount);
		let newIncome = parseInt(this.state.income) + parseInt(amount);
		this.setState({
			income: newIncome,
			balance: newBalance,
		});
	};

	expenseList = (item) => {
		let newExpenseList = [...this.state.expenseList, item];
		if (item.income) {
			this.incomeChange(item.amount);
		} else {
			this.expenseChange(item.amount);
		}
		this.setState({
			expenseList: newExpenseList,
		});
	};

	deleteTrans = (id) => {
		this.state.expenseList.forEach((item, index) => {
			if (item.id === id) {
				if (item.income) {
					this.setState({
						income: this.state.income - item.amount,
						balance: parseInt(this.state.balance) - parseInt(item.amount),
					});
				} else {
					this.setState({
						expenses: this.state.expenses - item.amount,
						balance: parseInt(this.state.balance) + parseInt(item.amount),
					});
				}
			}
			let newList = this.state.expenseList.filter((item) => item.id !== id);
			this.setState({
				expenseList: newList,
			});
		});
	};

	handleClear = () => {
		if (window.confirm("Are you sure?")) {
			this.setState({
				balance: 0,
				expenses: 0,
				income: 0,
				expenseList: [],
			});
		}
	};

	render() {
		return (
			<div className="container">
				<h1 className="main-label">Expense Tracker</h1>
				<Balance balance={this.state.balance} />
				<BalanceSplit
					income={this.state.income}
					expenses={this.state.expenses}
				/>
				<ExpenseList
					list={this.state.expenseList}
					del={(id) => this.deleteTrans(id)}
				/>
				<AddExpense
					add={(item) => {
						this.expenseList(item);
					}}
				/>
				<div
					style={{
						marginTop: "10px",
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<button
						style={{
							padding: "7px 11px",
							border: "none",
							backgroundColor: "rgb(248, 58, 58)",
							color: "white",
						}}
						onClick={this.handleClear}>
						Clear All
					</button>
				</div>
			</div>
		);
	}
}

export default App;
