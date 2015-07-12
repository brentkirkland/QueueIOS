/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('../style/Styles.js');
var Percentage = require('./Percentage.js');

var PlacePage = require('./PlacePage.js');

var {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} = React;

var CouponRow = React.createClass({

  render: function() {
    return(
    <View style={styles.row}>
      <TouchableOpacity onPress={() => this.props.navigator.push({
          title: 'Place Profile',
          component: PlacePage,
        })}>
        <View style={styles.place}>
          <Text style={styles.placeName}>
            {this.props.placeName}
          </Text>
          <Text style={styles.instructions}>
            Tap to claim
          </Text>
        </View>
      </TouchableOpacity>
      <Percentage percentage={this.props.percentage}/>
    </View>
  );
  }
});

module.exports = CouponRow;
