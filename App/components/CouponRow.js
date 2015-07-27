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
        <TouchableOpacity onPress={() =>
            this.props.navigator.push(this.handlePush())}>
          <View style={styles.place}>
            <Text style={styles.placeName}>
              {this.props.merchant._serverData.name}
            </Text>
            <Text style={styles.instructions}>
              {this.props.merchant._serverData.type}
            </Text>
          </View>
        </TouchableOpacity>
        <Percentage percentage={this.props.percentage}/>
      </View>
    );
  },
  handlePush: function(){
    if (this.props.signedIn){
      return (
        {
          name: 'PlacePage',
          passProps: {
            merchant: this.props.merchant._serverData,
            percentage: this.props.percentage,
          }
        }
      );
    } else {
      return (
        {
          name: 'SignUpPage',
        }
      );
    }
  },
  configureUser: function(){
    if (this.props.signedIn){
      return 'Tap to view';
    } else {
      return 'Sign up to claim';
    }
  },
});

module.exports = CouponRow;
