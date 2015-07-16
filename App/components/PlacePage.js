'use strict';

var React = require('react-native');
var TimerMixin = require('react-timer-mixin');

var {
  ActivityIndicatorIOS,
  ScrollView,
  Text,
  View,
  MapView,
} = React;

var CouponRow = require('./CouponRow.js')
var PlaceRow = require('./PlaceRow.js')
var PlaceInformation = require('./PlaceInformation.js')
var PlaceClaimButton = require('./PlaceClaimButton.js')

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
  displayMap: function(){
    if (this.state.animating){
      return (
        <View style={styles.mapSpinner}>
          <ActivityIndicatorIOS
          animating={this.state.animating}
          style={[{alignItems: 'center', justifyContent: 'center'}, {height: 200}]}/>
        </View>
      );
    } else {
      return (
        <MapView style={styles.map}
          pitchEnabled={false} scrollEnabled={false}
          rotateEnabled={false}
          region={{
            latitude: 34.4133292,
            longitude: -119.86097180000002,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01}}/>
      );
    }
  },
  render: function() {
    return (
      <View
      style={styles.page}>
        <View style={styles.topBar}/>
        <View style={styles.navBar}>
          <Text style={styles.navBarText}>{this.props.placeName}</Text>
        </View>
        {this.displayMap()}
        <PlaceRow placeName={'Current Offer'} percentage={this.props.percentage}/>
        <PlaceInformation information={{left: 'Type', right: 'Mexican'}}/>
        <PlaceInformation information={{left: 'Address', right: '956 Embarcadero, Isla Vista'}}/>
        <PlaceInformation information={{left: 'Phone', right: '(805) 420-6969'}}/>
        <PlaceInformation information={{left: 'Today\'s Hours', right: '10:00 am - 10:00 pm'}}/>
        <PlaceClaimButton/>
      </View>
    );
  },
});

var styles = require('../style/Styles.js')

module.exports = PlacePage;
