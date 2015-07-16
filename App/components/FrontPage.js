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
  Image,
} = React;

var CouponRow = require('./CouponRow.js');
var UserRow = require('./UserRow.js');
var AccountTab = require('./AccountTab.js');
var PlacePage = require('./PlacePage.js');

var FrontPage = React.createClass({

  render: function() {
    console.log('Front Page props', this.props.user)
    return (
      <View style={styles.container}>
        <View style={styles.topBar2}/>
        <View style={styles.space}>
          <Image
            style={styles.icon}
            source={require('image!queueskinny')}
          />
        </View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          stickyHeaderIndices={[0]}
          style={styles.container}>
        <View style={styles.space2}>
          <Text style={styles.header}>
            Current Deals
          </Text>
        </View>
        <CouponRow placeName={'Lovin Oven'} percentage={'9.00'} navigator={this.props.navigator} signedIn={(this.props.data.user !== undefined)}/>
        <CouponRow placeName={'La Cantina'} percentage={'6.90'} navigator={this.props.navigator} signedIn={(this.props.data.user !== undefined)}/>
        <CouponRow placeName={'Sorriso'} percentage={'4.20'} navigator={this.props.navigator} signedIn={(this.props.data.user !== undefined)}/>
        <View style={styles.space2}>
          <Text style={styles.header}>
            Account
          </Text>
        </View>
        <UserRow name={'Brent Kirkland'} username={'brentkirkland'} amount={'1.25'}/>
        <AccountTab tabName={'Transfer To Bank'}/>
        <AccountTab tabName={'Transaction History'}/>
        <AccountTab tabName={'Settings'}/>
        <AccountTab tabName={'Help'}/>
      </ScrollView>
      </View>
    );
  }
});

var styles = require('../style/Styles.js')

module.exports = FrontPage;
