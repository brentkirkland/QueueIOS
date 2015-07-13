'use strict';

var React = require('react-native');
var styles = require('../style/Styles.js')

var {
  AppRegistry,
  Text,
  View,
  StyleSheet
} = React;

var PlaceInformation = React.createClass({

  render: function() {
    return(
      <View style={styles.placeInformationRow}>
        <View style={styles.placeInformationDetailRow}>
          <Text style={styles.placeInformationRowLeft}>
            {this.props.information.left}
            </Text>
        </View>
        <View style={styles.placeInformationDetailRow}>
          <Text style={styles.placeInformationRowRight}>
            {this.props.information.right}
            </Text>
        </View>
    </View>
  );
  }
});

module.exports = PlaceInformation;
