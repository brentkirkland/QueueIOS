/**

 * Sample React Native App * https://github.com/facebook/react-native
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

var Cash = React.createClass({

  render: function() {
    return(
      <View style={styles.cash}>
        <Text style={styles.dollarSign}>
          $
        </Text>
        <Text style={styles.amount}>
          {this.props.amount}
        </Text>
      </View>
  );
  }
});

module.exports = Cash;
