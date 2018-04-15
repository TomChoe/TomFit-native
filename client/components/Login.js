import React, {Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import Services from '../Services'

export default class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			username: '',
			password: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit() {
		console.log('hitting handle submit')
		const {navigate} = this.props.navigation
		Services.loginUser(this.state)
		.then(user => {
			console.log('this is user results', user)
			this.setState({
				loggedIn: true,
				user: user.data.data
			}, () => navigate('Profile', this.state.user))
		})
		.catch(err => {
			console.log('error logging in', err)
		})
	}



	render(){
		console.log('user ~~> ', this.state.user)

		return(
			<View>
				<TextInput 
					autoCapitalize='none'
					style={{marginTop: 150, marginLeft: 150}}
					placeholder='username'
					onChangeText={(text) => this.setState({username: text})}
				/>
				<TextInput
					autoCapitalize='none'
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