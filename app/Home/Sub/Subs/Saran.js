import React, { Component } from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { Card, CardItem, ListItem, Right, Left, Icon } from 'native-base';

export default class Flist extends Component {
  render() {
    return (
    <View>
    <Card>
    <ListItem style={{height:30}}>
        <Left><Text>Orang yang mungkin anda kenal</Text></Left>
        <Right><Icon name="ios-more" /></Right>
    </ListItem>
    <ScrollView
    horizontal={true}>
    <CardItem>
      <View style={{ width: 200, height: 250, flexDirection: 'row'}}>
        <Image
          style={{ width: 200, height: 250, position: 'absolute' }}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/20610733?s=400&u=19c776a92cff09d4870d8549a84ba678042c0ce9&v=4' }}
        />
        <View style={{ flex: 1, backgroundColor: '#fff', alignSelf: 'flex-end' }}>
          <Text style={{ fontSize: 17, fontWeight:'bold', marginLeft: 6 }}>{'Bayu Saputro'}</Text>
          <Text style={{ marginTop: 6, marginLeft: 6 }}>{'8 teman yang sama'}</Text>
        </View>
      </View>
    </CardItem>
    <CardItem>
      <View style={{ width: 200, height: 250, flexDirection: 'row'}}>
        <Image
          style={{ width: 200, height: 250, position: 'absolute' }}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/20610733?s=400&u=19c776a92cff09d4870d8549a84ba678042c0ce9&v=4' }}
        />
        <View style={{ flex: 1, backgroundColor: '#fff', alignSelf: 'flex-end' }}>
          <Text style={{ fontSize: 17, fontWeight:'bold', marginLeft: 6 }}>{'Bayu Saputro'}</Text>
          <Text style={{ marginTop: 6, marginLeft: 6 }}>{'8 teman yang sama'}</Text>
        </View>
      </View>
    </CardItem>
    <CardItem>
      <View style={{ width: 200, height: 250, flexDirection: 'row'}}>
        <Image
          style={{ width: 200, height: 250, position: 'absolute' }}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/20610733?s=400&u=19c776a92cff09d4870d8549a84ba678042c0ce9&v=4' }}
        />
        <View style={{ flex: 1, backgroundColor: '#fff', alignSelf: 'flex-end' }}>
          <Text style={{ fontSize: 17, fontWeight:'bold', marginLeft: 6 }}>{'Bayu Saputro'}</Text>
          <Text style={{ marginTop: 6, marginLeft: 6 }}>{'8 teman yang sama'}</Text>
        </View>
      </View>
    </CardItem>
    </ScrollView>
    </Card>
    </View>
    );
  }
}