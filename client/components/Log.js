import React from 'react'
import { View, Text } from 'react-native'

const Log = (props) => {
	console.log('in the show log', props)
	return (
		<View>
			<Text>
				{"\n"}
				Exercise: {props.exercise}{"\n"}
				Duration: {props.duration} minutes{"\n"}
				Perceived Difficutly: {props.difficulty}{"\n"}
				Date: {new Date(props.date_created).toDateString()}{"\n"}{"\n"}
			</Text>	
		</View>
	)
}

export default Log