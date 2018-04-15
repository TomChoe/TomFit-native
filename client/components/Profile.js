import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Services from '../Services';
import Log from './Log';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state= {
			dataLoaded: false,
			data: null,
			user: this.props
		}
		this.showLogs = this.showLogs.bind(this)
	}

	componentDidMount() {
		Services.getLogs(this.state.user.id)
			.then(userLogs => {
				console.log('got userLogs')
				this.setState({
					dataLoaded: true,
					data: userLogs.data
				})
			})
			.catch(err => {
				console.log('error getting logs', err)
			})
	}

	static navigationOptions = {
		headerLeft: null,
		title: `Profile`,
		gesturesEnabled: false
	}

	showLogs() {
		return this.state.data.data.map(log => {
			return <Log {...log} key={log.id} />
		})
	}

	render() {
		console.log('This is the users logs~> ', this.state.data)
		return (
			<View style={styles.container}>
				<Text>
					{this.state.user.username}'s Profile:
					{"\n"}
				</Text>
				<Text>
				  Logs:
				</Text>
				{this.state.dataLoaded ? this.showLogs() : (<Text>You do not have any logs</Text>)}
				{"\n"}
				<Button 
					onPress={() => this.props.navigation.navigate('Create', this.state.user)} 
					title='Log a workout' 
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});