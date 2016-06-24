/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Navigator,
  View
} from 'react-native';

import AboutMeListView from './ReactComponent/AboutMeListView.js';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

class MyNavigator extends Component {

  constructor(){
      super();
      this.onButtonPress = this.onButtonPress.bind(this);
    }
    render(){
      return (
        <Navigator
        style={styles.container}
        initialRoute={{id: 'first'}}
        renderScene={this.navigatorRenderScene}/>
      );
    }

    navigatorRenderScene(route, navigator) {
      _navigator = navigator;
      switch (route.id) {
        case 'first':
        return (<AboutMeListView navigator={navigator} title="first"/>);
        case 'second':
        return (<AboutMeListView navigator={navigator} title="second" />);
      }
    }
    onButtonPress(event){
    console.log('pressed');
  }
}

AppRegistry.registerComponent('MyNavigator', () => MyNavigator);
