import React from 'react'
import ChartBar from '../ChartBar'

import './styles.css'

const Chart = (props) => {
	const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value)
	const max = Math.max(...dataPointValue)

	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={max}
					label={dataPoint.label}
				/>
			))}
		</div>
	)
}

export default Chart
