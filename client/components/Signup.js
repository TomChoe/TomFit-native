import React, { Component } from 'react'
import { View, TextInput, Text, Button } from 'react-native'
import Services from '../Services'

export default class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password:'',
			age: 0,
			weight: 0,
			height:''
		}
		this.submitForm = this.submitForm.bind(this)
	}

	submitForm() {
		const { navigate } = this.props.navigation
		Services.signupUser(this.state)
			.then(user => {
				console.log('this is user submit', user)
				this.setState({
					user: user.data
				}, () => navigate('Profile', this.state.user.data))
			})
			.catch(err => {
				console.log('error in signing up', err)
			})
	}

	render() {
		console.log('this is the signed up user', this.state.user)
		return (
			<View>
				<Text>
				Sign up Page
				</Text>
				<View>
					<TextInput
						autoCapitalize='none'
						style={{marginTop: 50, marginLeft: 50}}
						placeholder= "username"
						onChangeText={(text) => this.setState({username: text})}
					/>
					<TextInput
						autoCapitalize='none'
						style={{marginTop: 50, marginLeft: 50}}
						placeholder= "password"
						onChangeText={(text) => this.setState({password: text})}
					/>
					<TextInput
						style={{marginTop: 50, marginLeft: 50}}
						placeholder= "age"
						keyboard="numeric"
						onChangeText={(integer) => this.setState({age: integer})}
					/>
					<TextInput
						style={{marginTop: 50, marginLeft: 50}}
						placeholder= "weight"
						keyboard="numeric"
						onChangeText={(integer) => this.setState({weight: integer})}
					/>
					<TextInput
						style={{marginTop: 50, marginLeft: 50}}
						placeholder= "height"
						onChangeText={(text) => this.setState({height: text})}
					/>
					<Button 
				   		title='submit Data'
				   		onPress={this.submitForm}
					/>
				</View>
			</View>
		)
	}
}