import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadingScreen from './screens/read';
import WritingScreen from './screens/write';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  READ: {screen: ReadingScreen},
  WRITE: {screen: WritingScreen},
},
{
defaultNavigationOptions: ({navigation})=>({
  tabBarIcon:()=>{
    const routeName = navigation.state.routeName;
    if(routeName === "READ"){
      return(
        <Image
        source={require("./images/read.png")}
        style={{width:35, height:35}}
      />
      )
      
    }
    else if(routeName === "WRITE"){
      return(
        <Image
        source={require("./images/write.png")}
        style={{width:35, height:30}}
      />)
      
    }
  }
})
}
);

const AppContainer =  createAppContainer(TabNavigator);