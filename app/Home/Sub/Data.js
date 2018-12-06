import React, {Component} from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default Data = (props) => (
    <Card style={{flex: 0}}>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: props.anime.uri}} />
        <Body>
          <Text>{props.anime.nama}</Text>
          <Text note>{props.anime.tgl}</Text>
        </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{props.anime.text}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>{props.anime.like}</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
          <Icon active name="chatbubbles" />
          <Text>{props.anime.komen}</Text>
          </Button>
        </Body>
        <Right>
          <Text>{props.anime.time}</Text>
        </Right>
      </CardItem>
    </Card>
);
