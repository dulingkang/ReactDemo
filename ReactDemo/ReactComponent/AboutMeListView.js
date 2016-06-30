import React from 'react';
import { AppRegistry, Text, View, ListView } from 'react-native';

export default class AboutMeListView extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows(['', '分享App给小伙伴', '欢迎页', '服务条款']);
  }

  render() {
    return (
      <View>
      <ListView
      dataSource={this.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
      />
      </View>
    );
  }
}
