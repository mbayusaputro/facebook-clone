import React from 'react';
import { View } from 'react-native';
import { Thumbnail, Text } from 'native-base';

export default class Cari extends React.Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
          <Thumbnail large source={{uri: uri}} style={{marginBottom:20,marginTop:100}}/>
          <Text>Masukkan beberapa kata untuk</Text>
          <Text>dicari di Facebook</Text>
      </View>
    );
  }
}
