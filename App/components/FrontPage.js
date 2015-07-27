/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Parse = require('parse').Parse;
var TimerMixin = require('react-timer-mixin');

window.navigator.userAgent = "react-native";

var io = require('socket.io-client/socket.io');

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

var fp;

var FrontPage = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function() {
    fp = this;
    this.query();
    return {
      time: 0,
      startTime: (new Date()).getTime(),
      merchants: [],
    };
  },
  query: function(){
    var query = (new Parse.Query('merchant')).ascending('createdAt');
    var x = query.find({
      success: function(results) {
        console.log('results', results)
        return fp.setState({merchants: results});
      },
      error: function(error) {
        console.log('error');
      }
    });
  },
  componentDidMount: function() {
    //this.startPusher();
    this.timer();
  },
  startPusher: function(){

  },
  timer: function() {
    this.setInterval(
      () => {
        this.setState({time: (new Date()).getTime()})
      }, 1000
    );
  },
  mapMerchants: function(){
     return this.state.merchants.map(function(merchant) {
       return <CouponRow merchant={merchant} percentage={fp.calculate(merchant._serverData)} navigator={fp.props.navigator} key={merchant._serverData.name} signedIn={true}/>
     })
  },
  calculate: function(merchant) {
    var x = merchant.minprice + ((merchant.maxprice - merchant.minprice)/merchant.timeframe) * ((this.state.time - this.state.startTime)/1000);
    if (x > merchant.maxprice) {
      x = merchant.maxprice;
    }
    //console.log('maxprice', merchant.maxprice, 'xxx', x, 'bool', (x < merchant.maxprice))
    if (x > 0){
      return x.toFixed(2);
    }
    return
  },
  render: function() {
    var merchants = this.mapMerchants();
    return (
      <View style={styles.container2}>
        <View style={styles.topBar2}/>
          <View style={styles.space}>
            <Image
              style={styles.icon}
              source={require('image!queueskinny')}
            />
          </View>
          <View style={styles.blackdivider}></View>
        <View style={styles.scrollviewwrapper}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          style={styles.container}>

        {merchants}

      </ScrollView>
      </View>
      <View style={styles.greyendivider}></View>
      <UserRow name={'Brent Kirkland'} username={'brentkirkland'} amount={'1.25'}/>
      </View>
    );
  }
});

var styles = require('../style/Styles.js')

module.exports = FrontPage;
