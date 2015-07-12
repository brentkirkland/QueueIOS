/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
} = React;

var CouponRow = require('./CouponRow.js');
var UserRow = require('./UserRow.js');
var AccountTab = require('./AccountTab.js');
var PlacePage = require('./PlacePage.js');

var FrontPage = React.createClass({
  render: function() {
    return (
      <ScrollView
      automaticallyAdjustContentInsets={true}
      stickyHeaderIndices={[0]}
      style={styles.container}>
        <View style={styles.space2}>
          <Text style={styles.header}>
            Current Deals
          </Text>
        </View>
        <CouponRow placeName={'La Cantina'} percentage={'9.00'} navigator={this.props.navigator}/>
        <CouponRow placeName={'Jimmy Johns'} percentage={'16.90'}  navigator={this.props.navigator}/>
        <CouponRow placeName={'Yogurtland'} percentage={'4.20'}  navigator={this.props.navigator}/>
        <View style={styles.space2}>
          <Text style={styles.header}>
            Account
          </Text>
        </View>
        <UserRow name={'Brent Kirkland'} username={'brentkirkland'} amount={'144.10'}/>
        <AccountTab tabName={'Transfer To Bank'}/>
        <AccountTab tabName={'Transaction History'}/>
        <AccountTab tabName={'Settings'}/>
        <AccountTab tabName={'Help'}/>
      </ScrollView>
    );
  }
});

var styles = require('../style/Styles.js')

module.exports = FrontPage;
