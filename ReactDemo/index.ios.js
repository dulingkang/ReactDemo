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
  StatusBar,
  NavigatorIOS,
  View,
  ScrollView,
  DeviceEventEmitter,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import Util from './ReactComponent/utils';
import Day1 from './ReactComponent/day1';
import Day2 from './ReactComponent/day2';


class MainView extends Component {
  constructor() {
    super();
    this.jumpToDay = this.jumpToDay.bind(this);
    this.state = {
      days: [{
        key: 0,
        title: "stop watch",
        component: Day1,
        isFA: false,
        icon: "ios-stopwatch",
        size: 48,
        color: "#ff856c",
        hideNav: false
      },
      {
        key: 1,
        title: "Day2",
        component: Day2,
        isFA: false,
        icon: "ios-people",
        size: 48,
        color: "#ff856c",
        hideNav: false
      }]
    }
  }
  jumpToDay(index){
    this.props.navigator.push({
      title: this.state.days[index].title,
      component: this.state.days[index].component,
      navigationBarHidden: this.state.days[index].hideNav
})
  }
  render() {
    var onThis = this;
    var boxs = this.state.days.map(function (elem, index) {
      return(
        <TouchableHighlight key={elem.key} style={[styles.touchBox, index%3==2?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" onPress={()=> onThis.jumpToDay(index)}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>Day{index+1}</Text>
            {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:
              <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
          </View>
        </TouchableHighlight>
      );
    });
    return (
      <ScrollView>
        <Swiper height={150} showsButtons={false} autoplay={true}
          activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
          <TouchableHighlight onPress={()=> onThis.jumpToDay(11)}>
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri:'day1'}}></Image>
              <Text style={styles.slideText}>Day12: Charts</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=> onThis.jumpToDay(10)}>
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri:'day2'}}></Image>
              <Text style={styles.slideText}>Day11: OpenGL</Text>
            </View>
          </TouchableHighlight>
        </Swiper>
        <View style={styles.touchBoxContainer}>
          {boxs}
        </View>
      </ScrollView>
    );
  }
}

class MyNavigator extends Component {
  componentDidMount() {
    StatusBar.setBarStyle(0);
  }
  render(){
      return (
        <NavigatorIOS
          ref='nav'
          style={styles.container}
          initialRoute={{
            title:"30 Days of RN",
            component: MainView,
            backButtonTitle: 'back',
            shadowHidden: true,
          }}
          itemWrapperStyle={styles.itemWrapper}
          tintColor="#777"/>
      );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  itemWrapper:{
    backgroundColor: '#f3f3f3'
  },
  touchBox:{
    width: Util.size.width/3-0.33334,
    height:Util.size.width/3,
    backgroundColor:"#fff",
  },
  touchBoxContainer:{
    flexDirection: "row",
    flexWrap:"wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox1:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox2:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
  },
  boxContainer:{
    alignItems:"center",
    justifyContent:"center",
    width: Util.size.width/3,
    height:Util.size.width/3,
  },
  boxIcon:{
    position:"relative",
    top:-10
  },
  boxText:{
    position:"absolute",
    bottom:15,
    width:Util.size.width/3,
    textAlign:"center",
    left: 0,
    backgroundColor:"transparent"
  },
  slide: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText:{
    position:"absolute",
    bottom: 0,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"rgba(255,255,255,0.5)",
    width: Util.size.width,
    textAlign:"center",
    fontSize: 12
  },
  image:{
    width: Util.size.width,
    flex: 1,
    alignSelf: 'stretch',
  }
});

AppRegistry.registerComponent('MyNavigator', () => MyNavigator);
