import React, {Component} from 'react';
import {Content, List, CardItem, Input, Body, Thumbnail, Card, Item, Icon} from 'native-base';
import Story from './Sub/Subs/Story';
import Saran from './Sub/Subs/Saran';

import Data from './Sub/Data';

export default class Beranda extends Component {

  anime = [
    {nama:'Bayu Saputro',tgl:'6 Desember 2018',like:'96',komen:'24',text:'NativeBase is made from effective building blocks referred to as components. The Components are constructed in pure React Native platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.',uri:'https://avatars3.githubusercontent.com/u/20610733?s=400&u=19c776a92cff09d4870d8549a84ba678042c0ce9&v=4',time:'1h ago'},
    {nama:'Fitra Aditama',tgl:'6 Desember 2018',like:'97',komen:'13',text:'Follow these instructions if you need to build native code in your project. For example, if you are integrating React Native into an existing application, or if you "ejected" from Expo or Create React Native App, youll need this section.',uri:'https://avatars0.githubusercontent.com/u/44829651?s=400&v=4',time:'2h ago'},
    {nama:'Unknown User',tgl:'6 Desember 2018',like:'95',komen:'3',text:'The instructions are a bit different depending on your development operating system, and whether you want to start developing for iOS or Android. If you want to develop for both iOS and Android, thats fine - you just have to pick one to start with, since the setup is a bit different.',uri:'https://avatars0.githubusercontent.com/u/44829651?s=400&v=4',time:'3h ago'},
    {nama:'Arief Yusron',tgl:'6 Desember 2018',like:'98',komen:'1000',text:'React Navigation is born from the React Native communitys need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.',uri:'https://avatars1.githubusercontent.com/u/43350730?s=400&v=4',time:'4h ago'},
    {nama:'Risman',tgl:'6 Desember 2018',like:'20',komen:'50',text:'Before you commit to using React Navigation for your project, you might want to read the anti-pitch — it will help you to understand the tradeoffs that we have chosen along with the areas where we consider the library to be deficient currently.',uri:'https://avatars1.githubusercontent.com/u/40693945?s=400&v=4',time:'5h ago'}
  ]
    
  constructor(){
    super();
  }

  render(){
    return(
        <Content>
        <Status/>
        <Story/>
        <Saran/>
          <List>
            {this.anime.map((anime,key)=> <Data key={key} anime={anime}/>)}
          </List>
        </Content>
    )
  }
}

class Status extends Component {
  render() {
    return (
        <Card>
          <CardItem>
            <Thumbnail source={{ uri: 'https://avatars3.githubusercontent.com/u/20610733?s=400&u=19c776a92cff09d4870d8549a84ba678042c0ce9&v=4' }} />
            <Body>
              <Item style={{marginTop:8,marginRight:10,marginLeft:10,height:40}} rounded>
                <Input style={{fontSize:15}} placeholder='Apa yang anda pikirkan?'/>
              </Item>
            </Body>
            <Icon style={{color:'grey'}} name="ios-images" />
          </CardItem>
        </Card>
    );
  }
}