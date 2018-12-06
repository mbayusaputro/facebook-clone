import React from 'react';
import { ListItem, Text, Body, Button, Thumbnail } from 'native-base';

export default Add = (props) => (
      <ListItem avatar>
        <Thumbnail large source={{ uri: props.anime.uri }} />
        <Body>
          <Text>{props.anime.nama}</Text>
          <Text note>{props.anime.teman}</Text>
          <Button style={{backgroundColor:'#fff',marginTop:5}} small><Text style={{color:'#4167B2'}}>Tambahkan</Text></Button>
        </Body>
      </ListItem>
);