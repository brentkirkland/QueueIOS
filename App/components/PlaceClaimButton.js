'use strict';

var React = require('react-native');
var styles = require('../style/Styles.js')

var {
  AppRegistry,
  Text,
  View,
  StyleSheet
} = React;

var PlaceClaimButton = React.createClass({

  render: function() {
    return(
      <View style={styles.placeInformationClaimButtonWrapper}>
        <View style={styles.placeInformationClaimButton}>
          <Text style={styles.placeInformationClaimButtonText}>Claim Rebate</Text>
        </View>
      </View>
    );
  }
});

module.exports = PlaceClaimButton;
