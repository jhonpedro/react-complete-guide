import './ExpenseItem.css'

function ExpenseItem(props) {
	const month = props.date.toLocaleString('pt-br', { month: 'long' })
	const day = props.date.toLocaleString('pt-br', { day: '2-digit' })
	const year = props.date.getFullYear()

	return (
		<div className='expense-item'>
			<div>
				<div>
					{day}/{month}/{year}
				</div>
			</div>
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
		</div>
	)
}

export default ExpenseItem
