import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'
import Profile from './components/Profile';
import Createlog from './components/Createlog';

const navigationProps = (SomeComponent) => {
  return class extends React.Component {
    static navigationOptions = SomeComponent.navigationOptions
    render(){
      const {navigation: {state: {params}}} = this.props;
       return <SomeComponent {...params} {...this.props} />
    }
  }
}

const App = StackNavigator({
  Home : {screen: Home,
  		  navigationOptions: {
  		  	title: "Welcome"
  		  }
  },
  Login : {screen: Login,
  		   navigationOptions: {
  		   	title: "Log In"
  		   }
  },
  Signup : {screen: Signup,
  			navigationOptions: {
  				title: "Sign Up"
  			}
  },
  Profile : {screen: navigationProps(Profile)},
  Create : {screen: navigationProps(Createlog)}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App