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
  TouchableOpacity,
  Image,
} = React;

var CouponRow = require('./CouponRow.js');
var UserRow = require('./UserRow.js');
var SignUpRow = require('./SignUpRow.js');
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
      signedIn: false,
    };
  },
  query: function(){
    var query = (new Parse.Query('merchant')).ascending('createdAt');
    var x = query.find({
      success: function(results) {
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
  componentWillUnmount: function(){
    //this.clearInterval();
    //stop timer somehow
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
       return <CouponRow merchant={merchant}
               percentage={fp.calculate(merchant._serverData, fp.props.data, merchant)}
               navigator={fp.props.navigator}
               key={merchant._serverData.name}
               signedIn={fp.state.signedIn}/>;
     })
  },
  calculate: function(merchant, data, object) {
    var x;
    if (data.user !== undefined) {
      console.log('merchantId', object.id)
      if (data.user.objectId === object.id){
        //this.setState({startTimeTwo: 0});
        x = merchant.minprice + ((merchant.maxprice - merchant.minprice)/merchant.timeframe) * ((this.state.time - data.user.time)/1000);
      } else {
        x = merchant.minprice + ((merchant.maxprice - merchant.minprice)/merchant.timeframe) * ((this.state.time - this.state.startTime)/1000);
      }
    } else {
      //console.log(data.user.objectId)
      x = merchant.minprice + ((merchant.maxprice - merchant.minprice)/merchant.timeframe) * ((this.state.time - this.state.startTime)/1000);
    }
    if (x > merchant.maxprice) {
      x = merchant.maxprice;
    }
    //console.log('maxprice', merchant.maxprice, 'xxx', x, 'bool', (x < merchant.maxprice))
    if (x > 0){
      return x.toFixed(2);
    }
    return
  },
  renderBottom: function(){
    if (!this.state.signedIn){
      return <SignUpRow name={'Facebook'} username={'brentkirkland'} amount={'1.50'} navigator={fp.props.navigator}/>;
    } else {
      return
    }
  },
  render: function() {
    var merchants = this.mapMerchants();
    return (
      <View style={styles.container2}>
        <View style={styles.topBar2}/>
        <View style={styles.scrollviewwrapper}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          style={styles.container}
          stickyHeaderIndices={[0]}>
          <View style={styles.space}>
            <TouchableOpacity>
            <Image
            style={styles.icon}
            source={require('image!profileicon')}
            />
            </TouchableOpacity>
          <View style={styles.balanceView}>
            <Text style={styles.balanceSign}>$</Text>
            <Text style={styles.balance}>24.54</Text>
          </View>
          </View>
        {merchants}

      </ScrollView>
      </View>
      <View style={styles.greyendivider}></View>
      {this.renderBottom()}
      </View>
    );
  }
});

var styles = require('../style/Styles.js')

module.exports = FrontPage;
