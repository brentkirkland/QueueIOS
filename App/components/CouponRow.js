/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');
var styles = require('../style/Styles.js');
var Percentage = require('./Percentage.js');

var PlacePage = require('./PlacePage.js');

var ClaimActions = require('../actions/ClaimActions.js');

var {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  AlertIOS,
} = React;

var CouponRow = React.createClass({

  render: function() {
    return(
      <View style={styles.row}>
        <TouchableOpacity style={styles.place} onPress={() =>
            this.props.navigator.push(this.handlePush())}>
              <Text style={styles.placeName}>
                {this.props.merchant._serverData.name}
              </Text>
              <Text style={styles.instructions}>
                {this.props.signedIn ? this.props.merchant._serverData.type : 'Sign up to claim'}
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.percent} onPress={() => this.alert(this.props.merchant, this.props.percentage)}>
              <Text style={styles.percentNumber}>
                {this.props.percentage}
              </Text>
              <Text style={styles.percentSign}>
                %
              </Text>
          </TouchableOpacity>
        </View>
      );
    },
    alert: function(merchant, price){
      AlertIOS.alert(
        'Confirm Claim',
        'You have claimed a discount of ' + price + '% at ' + merchant._serverData.name,
        [
        {text: 'Cancel', onPress: () => console.log(merchant)},
        {text: 'Confirm', onPress: () => this.claim(merchant.id)},
        ]
      )
    },
    claim: function(objectId){
      ClaimActions.claim(objectId)
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
