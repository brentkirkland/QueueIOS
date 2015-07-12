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

var Percentage = React.createClass({

  render: function() {
    return(
      <View style={styles.percent}>
        <Text style={styles.percentNumber}>
          {this.props.percentage}
        </Text>
        <Text style={styles.percentSign}>
          %
        </Text>
      </View>
  );
  }
});

module.exports = Percentage;
