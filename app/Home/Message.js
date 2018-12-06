import React, {Component} from 'react';
import {Content, List, Text} from 'native-base';

import Vlist from './Sub/Isi';

export default class Message extends Component {

  anime = [
    {nama:'Bayu Saputro',text:'Yuuu, Lagi dimana?',time:'10:12 pm',uri:'https://avatars3.githubusercontent.com/u/20610733?s=400&u=19c776a92cff09d4870d8549a84ba678042c0ce9&v=4'},
    {nama:'Fitra Aditama',text:'Bay, titip makanan ya',time:'10:10 pm',uri:'https://avatars0.githubusercontent.com/u/44829651?s=400&v=4'},
    {nama:'Unknown User',text:'Udah makan?',time:'10:8 pm',uri:'https://avatars0.githubusercontent.com/u/44829651?s=400&v=4'},
    {nama:'Arief Yusron',text:'Aku lagi di luar',time:'10:05 pm',uri:'https://avatars1.githubusercontent.com/u/43350730?s=400&v=4'},
    {nama:'Risman',text:'Bleh bleh bleh',time:'10:01 pm',uri:'https://avatars1.githubusercontent.com/u/40693945?s=400&v=4'}
  ]
    
  constructor(){
    super();
  }
    
  render(){
    return(
        <Content>
        <List style={{height:30}}>
          <Text style={{marginLeft:15, marginTop:4, fontWeight:'bold'}}>Pesan</Text>
        </List>
          <List>
            {this.anime.map((anime,key)=> <Vlist key={key} anime={anime}/>)}
          </List>
        </Content>
    )
  }
}