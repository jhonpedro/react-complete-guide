import React, { useState } from 'react'
import Card from '../Card'
import ExpenseItem from '../ExpenseItem'
import ExpensesFilter from '../ExpensesFilter'

import './styles.css'

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020')

	const yearFilterChangeHandler = (year) => {
		setFilteredYear(year)
	}

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={yearFilterChangeHandler}
			/>
			{props.items.map((expense, index) => (
				<ExpenseItem
					key={index}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	)
}

export default Expenses
