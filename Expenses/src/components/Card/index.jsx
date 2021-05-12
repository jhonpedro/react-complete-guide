import React from 'react'
import './styles.css'

function Card(props) {
	const className = `card ${props.className}`

	return <div className={className}>{props.children}</div>
}

export default Card
