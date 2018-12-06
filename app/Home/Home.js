import React from 'react';
import { Icon, Container } from 'native-base';
import Message from './Message';
import Beranda from './Beranda';
import Friends from './Friends';
import Notif from './Notif';
import Setting from './Setting';

import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';

class ProfileScreen extends React.Component {
  render() {
    return (
      <Container>
      </Container>
    );
  }
}

class DScreen extends React.Component {
  render() {
    return (
      <Container>
        <Friends/>
      </Container>
    );
  }
}

class SettingScreen extends React.Component {
  render() {
    return (
      <Container>
        <Setting/>
      </Container>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Beranda/>
      </Container>
    );
  }
}

class MessageScreen extends React.Component {
  render() {
    return (
      <Container>
        <Message/>
      </Container>
    );
  }
}

class NotifScreen extends React.Component {
  render() {
    return (
      <Container>
        <Notif/>
      </Container>
    );
  }
}

const HomeStack = createMaterialTopTabNavigator({
  1: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused })=> <Icon 
      style = {{ color: tintColor }}
      name='ios-image' />,
    }
  },
  2: {
    screen: DScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused })=> <Icon 
      style = {{ color: tintColor }}
      name='ios-contacts' />,
    }
  },
  3: {
    screen: MessageScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused })=> <Icon 
      style = {{ color: tintColor }}
      name='chatbubbles' />,
    }
  },
  4: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused })=> <Icon 
      style = {{ color: tintColor }}
      name='ios-contact' />,
    }
  },
  5: {
    screen: NotifScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused })=> <Icon 
      style = {{ color: tintColor }}
      name='ios-notifications' />,
    }
  },
  6: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused })=> <Icon 
      style = {{ color: tintColor }}
      name='ios-menu' />,
    }
  }
  },
  {
    tabBarOptions: {
        tabStyle: {
          },
        activeTintColor: '#4167B2',
            height: 50,
        inactiveTintColor: 'grey',    
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
          backgroundColor: '#4167B2',
        },
        style: {
          backgroundColor: '#fff',
        },
      }
});

export default createAppContainer(HomeStack);
