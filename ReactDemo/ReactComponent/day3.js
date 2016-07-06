'use strict';
import React,{Component} from 'react';
import {ListView,StyleSheet,Text,TouchableHighlight,View,Image} from 'react-native';
import Util from './utils';
var AboutMeManager = require('react-native').NativeModules.DMAboutMeManager;

class TopView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style = {styles.topViewBack}>
        <View style = {styles.topView}>
          <Image style = {styles.topImage} source = {{uri: 'logo_dmall'}}></Image>
          <Text style = {styles.topText}>{'当前版本: '+ AboutMeManager.version}</Text>
        </View>
      </View>
    )
  }
}

export default class AboutMeListView extends Component {
  constructor(props) {
    super(props);
    console.log('**********');
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows(['', '分享App给小伙伴', '欢迎页', '服务条款']);
  }

  render() {
    return (
      <View style={styles.container}>
      <ListView
      style = {styles.listView}
      dataSource={this.dataSource}
      renderRow={this.renderRow}
      />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID, highlightRow) {
    if (rowID == 0) {
      return  (
          <TopView></TopView>
      );
    } else {
      return (
        <View>
          <View style = {styles.listLine}></View>
          <View style = {styles.listCell}>
            <Text style = {styles.listCellText}>{rowData}</Text>
            <Image style = {styles.rightImage} source = {{uri: 'my_cell_right'}}></Image>
          </View>
        </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listView: {
    backgroundColor: '#f0f0f0',
  },
  listCell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    height: 40,
  },
  listLine: {
    backgroundColor: '#f0f0f0',
    height: 0.5
  },
  rightImage: {
    width: 8,
    height: 14,
    marginRight: 10,
    marginTop: 12
  },
  listCellText: {
    fontSize: 13,
    marginLeft: 10,
    marginTop: 12
  },
  topViewBack: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 200,
    alignItems:'center'
  },
  topView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 120
  },
  topImage: {
    width: 100,
    height: 100,
    top: 0
  },
  topText: {
    width: 100,
    height: 15,
    textAlign:'center',
    fontSize: 13,
    marginBottom: 0
  }

});
