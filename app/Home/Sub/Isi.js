import React, {Component} from 'react';
import { ListItem, Left, Thumbnail, Body, Right, Text} from 'native-base';

export default Isi = (props) => (
  <ListItem avatar>
    <Left>
      <Thumbnail source={{ uri: props.anime.uri }} />
    </Left>
    <Body>
      <Text>{props.anime.nama}</Text>
      <Text note>{props.anime.text}</Text>
    </Body>
    <Right>
      <Text note>{props.anime.time}</Text>
    </Right>
  </ListItem>
);