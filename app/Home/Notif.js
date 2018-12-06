import React, { Component } from 'react';
import { Content, ListItem, Text, Body, Thumbnail, List, Right, Icon, Left, Card } from 'native-base';
export default class Friend extends Component {
  render() {
    return (
        <Content>
        <Card>
        <List style={{height:30}}>
            <Text style={{marginLeft:15, marginTop:4, fontWeight:'bold'}}>Baru</Text>
        </List>
        <List>
          <ListItem avatar noIndent style={{ backgroundColor: "#cde1f9" }}>
          <Left>
            <Thumbnail source={{ uri: 'https://avatars3.githubusercontent.com/u/20610733?s=400&u=19c776a92cff09d4870d8549a84ba678042c0ce9&v=4' }} />
          </Left>
            <Body>
              <Text>Bayu menambahkan cerita</Text>
              <Text note>3 jam yang lalu</Text>
            </Body>
            <Right style={{justifyContent:'center'}}>
                <Icon name="ios-more" />
            </Right>
          </ListItem>
        </List>
        </Card>
        <Card>
        <List style={{height:30}}>
            <Text style={{marginLeft:15, marginTop:4, fontWeight:'bold'}}>Lebih Awal</Text>
        </List>
        <List>
          <ListItem avatar noIndent>
          <Left>
            <Thumbnail source={{ uri: 'https://avatars3.githubusercontent.com/u/20610733?s=400&u=19c776a92cff09d4870d8549a84ba678042c0ce9&v=4' }} />
          </Left>
            <Body>
              <Text>Bayu mengirim sesuatu di Code Android Indonesia</Text>
              <Text note>Kemarin pukul 13.33</Text>
            </Body>
            <Right style={{justifyContent:'center'}}>
                <Icon name="ios-more" />
            </Right>
          </ListItem>
        </List>
        </Card>
        </Content>
    );
  }
}