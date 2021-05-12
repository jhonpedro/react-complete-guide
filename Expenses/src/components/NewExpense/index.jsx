import React, { useState } from 'react'
import ExpenseForm from '../ExpenseForm'

import './styles.css'

const NewExpense = (props) => {
	const [showForm, setShowForm] = useState(false)
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}

		props.onAddExpense(expenseData)
	}

	const showFormHandler = () => {
		setShowForm((prevState) => !prevState)
	}

	return (
		<div className='new-expense'>
			{showForm ? (
				<ExpenseForm
					onNewExpense={saveExpenseDataHandler}
					onCancelNewExpense={showFormHandler}
				/>
			) : (
				<button onClick={showFormHandler}>Add new expense.</button>
			)}
		</div>
	)
}

export default NewExpense
