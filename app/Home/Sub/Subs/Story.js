import React, { Component } from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { Card, CardItem, ListItem, Right, Left, Icon } from 'native-base';

export default class Story extends Component {
  render() {
    return (
    <View>
    <Card>
    <ListItem style={{height:30}}>
        <Left><Text style={{fontWeight:'bold'}}>Cerita</Text></Left>
        <Right><Icon name="ios-arrow-forward" /></Right>
    </ListItem>
    <ScrollView
    horizontal={true}>
      <CardItem>
      <View style={{ width: 100, height: 150, flexDirection: 'row' }}>
        <Image
          style={{ width: 100, height: 150, position: 'absolute' }}
          source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
        />
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
          <Text style={{ color: 'white', margin: 6 }}>{'Muhamad'}</Text>
        </View>
      </View>
      </CardItem>
      <CardItem>
      <View style={{ width: 100, height: 150, flexDirection: 'row'}}>
        <Image
          style={{ width: 100, height: 150, position: 'absolute' }}
          source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
        />
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
          <Text style={{ color: 'white', margin: 6 }}>{'Bayu'}</Text>
        </View>
      </View>
      </CardItem>
      <CardItem>
      <View style={{ width: 100, height: 150, flexDirection: 'row'}}>
        <Image
          style={{ width: 100, height: 150, position: 'absolute' }}
          source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
        />
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
          <Text style={{ color: 'white', margin: 6 }}>{'Saputro'}</Text>
        </View>
      </View>
      </CardItem>
      <CardItem>
      <View style={{ width: 100, height: 150, flexDirection: 'row'}}>
        <Image
          style={{ width: 100, height: 150, position: 'absolute' }}
          source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
        />
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
          <Text style={{ color: 'white', margin: 6 }}>{'Arkademy'}</Text>
        </View>
      </View>
      </CardItem>
    </ScrollView>
    </Card>
    </View>
    );
  }
}