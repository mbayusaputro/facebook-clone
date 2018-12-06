import React from 'react';
import { View } from 'react-native';
import { Button, Thumbnail, Text, Item, Input } from 'native-base';

export default class Login extends React.Component {
  render() {
    const uri = 'https://avatars3.githubusercontent.com/u/20610733?s=400&u=19c776a92cff09d4870d8549a84ba678042c0ce9&v=4';
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#4167B2' }}>
        <Thumbnail large square source={{uri: uri}} style={{marginBottom:20}}/>
        <Text style={{color:'#fff'}}>Masukkan Kata Sandi</Text>
        <Item style={{width:280, marginTop:20}}>
          <Input style={{color:'#fff'}} secureTextEntry placeholder='Kata Sandi'/>
        </Item>
        <Button style={{marginTop:20, marginBottom:120, marginLeft:40, marginRight:40}} block onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Masuk</Text>
        </Button>
        <Text style={{color:'#fff'}}>Lupa Kata Sandi?</Text>
      </View>
    );
  }
}