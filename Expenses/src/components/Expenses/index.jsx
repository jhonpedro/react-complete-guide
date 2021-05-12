import React, { useState } from 'react'
import Card from '../Card'
import ExpensesFilter from '../ExpensesFilter'
import ExpensesList from '../ExpensesList'
import ExpensesChart from '../ExpensesChart'

import './styles.css'

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020')

	const yearFilterChangeHandler = (year) => {
		setFilteredYear(year)
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={yearFilterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList expenses={filteredExpenses} />
		</Card>
	)
}

export default Expenses
