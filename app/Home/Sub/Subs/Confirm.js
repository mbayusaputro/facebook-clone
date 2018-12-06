import React from 'react';
import { ListItem, Text, Body, Button, Thumbnail } from 'native-base';

export default Confirm = (props) => (
      <ListItem avatar>
        <Thumbnail large source={{ uri: props.anime.uri }} />
        <Body>
          <Text>{props.anime.nama}</Text>
          <Text note>{props.anime.teman}</Text>
          <Button style={{marginTop:5, backgroundColor:'#4167B2'}} small><Text>Konfirmasi</Text></Button>
        </Body>
      </ListItem>
);