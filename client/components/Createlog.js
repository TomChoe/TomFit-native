import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Services from '../Services';

export default class Createlog extends Component {
	constructor(props) {
		super(props)
		this.state= {
			dataLoaded: false,
			data: null,
			user: this.props,
			user_id: this.props.id,
			exercise: '',
			duration: 0,
			difficutly: 0
		}
		this.submitForm = this.submitForm.bind(this)
	}

	submitForm() {
		console.log('submitting log form', this.state)
		const { navigate } = this.props.navigation
		Services.createLog(this.state)
			.then(log => {
				console.log('submit new log ->', log)
				this.setState({
					dataLoaded: true,
					data: log.data
				}, () => navigate('Profile', this.state.user))
			})
			.catch(err => {
				console.log('error making new log', err)
			})
	}

	static navigationOptions = {
			title: 'Log Workout'
		}

	render() {
		console.log('current user in createlog', this.state.user)
		return (
			<View>
				<Text>
					Create log
				</Text>
				<View>
					<TextInput
						autoCapitalize='none'
						style={{marginTop: 50, marginLeft: 50}}
						placeholder= "exercise"
						onChangeText={(text) => this.setState({exercise: text})}
					/>
					<TextInput
						style={{marginTop: 50, marginLeft: 50}}
						placeholder= "duration"
						onChangeText={(integer) => this.setState({duration: integer})}
					/>
					<TextInput
						style={{marginTop: 50, marginLeft: 50}}
						placeholder= "Rate difficulty 1-10"
						onChangeText={(integer) => this.setState({difficulty: integer})}
					/>
					<Button
						title="submit log"
						onPress={this.submitForm}
					/>
				</View>
			</View>
		)
	}
}