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

var PlaceRow = React.createClass({

  render: function() {
    return(
    <View style={styles.row}>
        <View style={styles.place}>
          <Text style={styles.placeName}>
            {this.props.placeName}
          </Text>
        </View>
      <Percentage percentage={this.props.percentage}/>
    </View>
  );
  }
});

module.exports = PlaceRow;
