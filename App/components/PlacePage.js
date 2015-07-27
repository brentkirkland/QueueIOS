'use strict';

var React = require('react-native');
var TimerMixin = require('react-timer-mixin');
var MapboxGLMap = require('react-native-mapbox-gl');

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

            <MapboxGLMap
              style={styles.map}
              direction={0}
              rotateEnabled={true}
              scrollEnabled={true}
              zoomEnabled={true}
              showsUserLocation={false}
              attributionControl={false}
              ref={'mapRef'}
              accessToken={'pk.eyJ1IjoiYnJlbnRraXJrbGFuZCIsImEiOiJpMlgyVWg0In0.tpVmw3zomG2woo8kGoizSw'}
              styleURL={'asset://styles/dark-v7.json'}
              centerCoordinate={{
                latitude: 34.4133292,
                longitude: -119.86097180000002,}}
              zoomLevel={14} />
      );
    }
  },
  render: function() {
    return (
      <View
      style={styles.page}>
        <View style={styles.topBar}/>
        <View style={styles.navBar}>
          <Text style={styles.navBarText}>{this.props.merchant.name}</Text>
          {console.log('merchant name', this.props.merchant)}
        </View>
        <View style={styles.blackdivider}></View>
        {this.displayMap()}
        <PlaceRow placeName={'Current Offer'} percentage={this.props.percentage}/>
        <PlaceInformation information={{left: 'Type', right: this.props.merchant.type}}/>
        <PlaceInformation information={{left: 'Address', right: this.props.merchant.address}}/>
        <PlaceInformation information={{left: 'Phone', right: this.props.merchant.phone}}/>
        <PlaceInformation information={{left: 'Today\'s Hours', right: this.props.merchant.hours}}/>
        <View style={styles.scrollviewwrapper}></View>
        <PlaceClaimButton/>
      </View>
    );
  },
});

var styles = require('../style/Styles.js')

module.exports = PlacePage;
