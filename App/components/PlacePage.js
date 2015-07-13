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
var PlaceRow = require('./PlaceRow.js')
var PlaceInformation = require('./PlaceInformation.js')
var PlaceClaimButton = require('./PlaceClaimButton.js')

var PlacePage = React.createClass({
  render: function() {
    return (
      <View
      style={styles.page}>
        <MapView style={styles.map}
          pitchEnabled={false} scrollEnabled={false}
          rotateEnabled={false}
          region={{
            latitude: 34.4133292,
            longitude: -119.86097180000002,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01}}></MapView>
        <PlaceRow placeName={this.props.placeName} percentage={this.props.percentage}/>
        <PlaceInformation information={{left: 'Type', right: 'Mexican'}}/>
        <PlaceInformation information={{left: 'Address', right: '956 Embarcadero, Isla Vista'}}/>
        <PlaceClaimButton/>
      </View>
    );
  }
});

var styles = require('../style/Styles.js')

module.exports = PlacePage;
