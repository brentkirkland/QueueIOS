'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  MapView,
} = React;

var CouponRow = require('./CouponRow.js')
var UserRow = require('./UserRow.js')
var AccountTab = require('./AccountTab.js')

var PlacePage = React.createClass({
  render: function() {
    return (
      <View
      style={styles.page}>
        <MapView style={styles.map}></MapView>
        <UserRow name={'Brent Kirkland'} username={'brentkirkland'} amount={'144.10'}/>
        <AccountTab tabName={'Mexican, American'}/>
        <AccountTab tabName={'Click to Claim'}/>
      </View>
    );
  }
});

var styles = require('../style/Styles.js')

module.exports = PlacePage;
