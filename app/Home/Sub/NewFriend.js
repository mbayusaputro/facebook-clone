import React, {Component} from 'react';
import { List, Card, Text } from 'native-base';

import Friend from './Subs/Confirm';

export default class NewFriend extends Component {

  anime = [
    {nama:'Bayu Saputro',teman:'24 teman yang sama',uri:'https://avatars3.githubusercontent.com/u/20610733?s=400&u=19c776a92cff09d4870d8549a84ba678042c0ce9&v=4'},
    {nama:'Fitra Aditama',teman:'8 teman yang sama',uri:'https://avatars0.githubusercontent.com/u/44829651?s=400&v=4'},
    {nama:'Unknown User',teman:'96 teman yang sama',uri:'https://avatars1.githubusercontent.com/u/20166436?s=400&v=4'},
    {nama:'Arief Yusron',teman:'1 teman yang sama',uri:'https://avatars1.githubusercontent.com/u/43350730?s=400&v=4'},
    {nama:'Risman',teman:'2 teman yang sama',uri:'https://avatars1.githubusercontent.com/u/40693945?s=400&v=4'}
  ]
    
  constructor(){
    super();
  }

  render(){
    return(
      <Card>
        <List style={{height:30}}>
          <Text style={{marginLeft:15, marginTop:4, fontWeight:'bold'}}>Permintaan Pertemanan</Text>
        </List>
        <List>
          {this.anime.map((anime,key)=> <Confirm key={key} anime={anime}/>)}
        </List>
      </Card>
    )
  }
}