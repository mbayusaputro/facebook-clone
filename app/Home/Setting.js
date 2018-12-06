import React, { Component } from 'react';
import { Container, Content, ListItem, Text, Icon, Left, Body, Button, Thumbnail, List } from 'native-base';
export default class Setting extends Component {
  render() {
    return (
      <Container>
        <Content>
        <List>
          <ListItem>
            <Thumbnail large source={{ uri: 'https://avatars3.githubusercontent.com/u/20610733?s=400&u=19c776a92cff09d4870d8549a84ba678042c0ce9&v=4' }} />
            <Body>
              <Text style={{fontSize:20}}>Bayu Saputro</Text>
              <Text note>Lihat profil Anda</Text>
            </Body>
          </ListItem>
        </List>
          <ListItem icon>
            <Left>
              <Button rounded style={{ backgroundColor: "#4167B2" }}>
                <Icon active name="ios-people" />
              </Button>
            </Left>
            <Body>
              <Text>Grup</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button rounded style={{ backgroundColor: "#4167B2" }}>
                <Icon active name="ios-cart" />
              </Button>
            </Left>
            <Body>
              <Text>Marketplace</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button rounded style={{ backgroundColor: "#4167B2" }}>
                <Icon active name="ios-calendar" />
              </Button>
            </Left>
            <Body>
              <Text>Acara</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button rounded style={{ backgroundColor: "#4167B2" }}>
                <Icon active name="ios-timer" />
              </Button>
            </Left>
            <Body>
              <Text>Kenangan</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button rounded style={{ backgroundColor: "#4167B2" }}>
                <Icon active name="ios-bookmark" />
              </Button>
            </Left>
            <Body>
              <Text>Tersimpan</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button rounded style={{ backgroundColor: "#4167B2" }}>
                <Icon active name="ios-chatbubbles" />
              </Button>
            </Left>
            <Body>
              <Text>Pasang Messenger</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button rounded style={{ backgroundColor: "#4167B2" }}>
                <Icon active name="ios-flag" />
              </Button>
            </Left>
            <Body>
              <Text>Halaman</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button rounded style={{ backgroundColor: "#4167B2" }}>
                <Icon active name="ios-pin" />
              </Button>
            </Left>
            <Body>
              <Text>Tempat di Sekitar</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button rounded style={{ backgroundColor: "#4167B2" }}>
                <Icon active name="apps" />
              </Button>
            </Left>
            <Body>
              <Text>Lihat Lainnya</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}