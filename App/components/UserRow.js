/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('../style/Styles.js')
var Cash = require('./Cash.js')

var {
  AppRegistry,
  Text,
  View,
  StyleSheet
} = React;

var UserRow = React.createClass({

  render: function() {
    return(
    <View style={styles.row}>
      <View style={styles.place}>
        <Text style={styles.placeName}>
          {this.props.name}
        </Text>
        <Text style={styles.instructions}>
          {this.props.username}
        </Text>
      </View>
      <Cash amount={this.props.amount}/>
    </View>
  );
  }
});

module.exports = UserRow;
