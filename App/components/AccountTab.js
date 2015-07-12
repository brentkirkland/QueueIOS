/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('../style/Styles.js')

var {
  AppRegistry,
  Text,
  View,
  StyleSheet
} = React;

var AccountTab = React.createClass({

  render: function() {
    return(
    <View style={styles.accountRow}>
        <Text style={styles.accountText}>
          {this.props.tabName}
        </Text>
    </View>
  );
  }
});

module.exports = AccountTab;
