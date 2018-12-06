import React from 'react';
import { Button } from 'react-native';
import { Text, Item, Icon, Input } from 'native-base';
import Login from './app/Login';
import Cari from './app/Home/Sub/Cari';
import Home from './app/Home/Home';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

const RootStack = createStackNavigator(
  {
    Cari: {
      screen: Cari,
      navigationOptions: {
        headerTitle: (
        <Item style={{width:250, height:30}}>
          <Input style={{color:'#fff'}}></Input>
        </Item>),
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header:null,
      }
    },
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => {
        return {
        headerTitle: (
        <Item style={{marginLeft:20, width:210, height:30}} onPress={() => navigation.navigate('Cari')}>
          <Icon style={{color:'#fff'}} name="ios-search" />
          <Input style={{color:'#fff'}}>Cari</Input>
        </Item>),
        headerLeft: (
          <Icon style={{color:'#fff', marginLeft:20}} name="camera"/>
        ),
        headerRight: (
          <Icon style={{color:'#fff', marginRight:20}} name="logo-facebook" onPress={() => alert('This is a button!')}/>
        ),
        }
      }
    }
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#4167B2',
        height: 50,          
      },
      headerTintColor: '#fff',
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}