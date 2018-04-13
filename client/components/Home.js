import React, {Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import Services from '../services/apiServices'


export default class Home extends Component {
	constructor(props){
	super(props)
	this.state = {
		username: '',
		password: ''
	}
	this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(){
	console.log('hitting handle submit')

	Services.loginUser(this.state)
	.then(results => {
		console.log('this is user results', results)
	})
	.catch(err => {
		console.log(err)
	})

}

render(){
	return(
			<View>
			<TextInput 
				style={{marginTop: 150, marginLeft: 150}}
				placeholder='username'
				onChangeText={(text) => this.setState({username: text})}
			/>
			<TextInput 
				style={{marginTop: 200, marginLeft: 150}}
				placeholder='password'
				onChangeText={(text) => this.setState({password: text})}
			/>
				<Button 
				    title='submit Data'
				    onPress={this.handleSubmit}
				/>
			</View>
			)
	}
}