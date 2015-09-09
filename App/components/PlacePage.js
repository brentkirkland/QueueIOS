'use strict';

var React = require('react-native');
var TimerMixin = require('react-timer-mixin');

var {
  ActivityIndicatorIOS,
  ScrollView,
  Text,
  View,
  MapView,
  Image,
  TouchableOpacity,
} = React;

var CouponRow = require('./CouponRow.js')
var PlaceRow = require('./PlaceRow.js')
var PlaceInformation = require('./PlaceInformation.js')
var PlaceClaimButton = require('./PlaceClaimButton.js')
var PercentDesign = require('./PercentDesign.js')

var PlacePage = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function() {
    return {
      animating: true,
    };
  },
  setToggleTimeout: function() {
    this.setTimeout(
      () => {
        this.setState({animating: !this.state.animating});
      },
      500
    );
  },
  componentDidMount: function() {
    this.setToggleTimeout();
  },
  render: function() {
    return (
      <View
        style={styles.page}>
        <View style={styles.topBar}/>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          stickyHeaderIndices={[0]}
          style={styles.container}>
          <View style={styles.navBar}>
            <TouchableOpacity>
              <Image
                style={styles.icon2}
                source={require('image!pulldown')}
                />
            </TouchableOpacity>
          </View>
          <PercentDesign percentage={this.props.percentage}/>
          <PlaceClaimButton/>
            <View style={styles.placeBox}>
              <Text style={styles.placeBoxTitle}>{this.props.merchant.name}</Text>
              <Text style={styles.placeBoxInfo}>0.3 mi | 344 stars</Text>
            </View>
          <PlaceInformation information={{left: 'Type', right: this.props.merchant.type}}/>
          <PlaceInformation information={{left: 'Address', right: this.props.merchant.address}}/>
          <PlaceInformation information={{left: 'Phone', right: this.props.merchant.phone}}/>
          <PlaceInformation information={{left: 'Today\'s Hours', right: this.props.merchant.hours}}/>
          <View style={styles.scrollviewwrapper}></View>
        </ScrollView>
      </View>
    );
  },
});

var styles = require('../style/Styles.js');
module.exports = PlacePage;
