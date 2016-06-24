import React from 'react';
import { AppRegistry, Text, View, ListView } from 'react-native';

var AboutMeListView = React.createClass ({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['', '分享App给小伙伴', '欢迎页', '服务条款'])
    };
  },
  render() {
    return (
      <View>
      <ListView
      dataSource={this.status.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
      />
      </View>
    );
  }
});
