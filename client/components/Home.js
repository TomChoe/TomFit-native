import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'

export default class Home extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>
					{`\n\nTomFit`}
				</Text>
				  <View style={styles.container}>
				    <Button
				    	title="Log In"
				    	onPress={() => this.props.navigation.navigate('Login')}
				    />
				    <Button
				    	title="Sign Up"
				    	onPress={() => this.props.navigation.navigate("Signup")}
				    />    
				  </View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});