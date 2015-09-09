/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');
var styles = require('../style/Styles.js')
var FacebookActions = require('../actions/FacebookActions.js');

var {
  Text,
  View,
  TouchableOpacity
} = React;

var SignUpRow = React.createClass({

  render: function() {
    return(
      <View style={styles.signUpLanding}>
        <View style={styles.row3}>
          <TouchableOpacity style={styles.placeInformationClaimButton} onPress={() => this.facebookLogin(this.props.navigator)}>
              <Text style={styles.placeInformationClaimButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpTextOr}>or </Text>
          <TouchableOpacity onPress={() => this.props.navigator.push({name: 'SignUpPage'})}>
            <Text style={styles.signUpText}>sign up with email</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
  facebookLogin: function(nav){
    FacebookActions.newFacebookSession(nav);
  },
});

module.exports = SignUpRow;
