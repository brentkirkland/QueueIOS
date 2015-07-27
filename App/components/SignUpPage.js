/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');
var styles = require('../style/Styles.js');
var FacebookActions = require('../actions/FacebookActions.js');
var Parse = require('parse').Parse;

var {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} = React;

var SignUpPage = React.createClass({

  render: function() {
    // if (Parse.User.isCurrent()){
    //   // this.props.navigator.pop();
    //   console.log('user is current');
    // }
    return (
      <View style={styles.container}>
        <View style={styles.topBar2}/>
        <View style={styles.navBar}>
          <Text style={styles.navBarText}>Sign Up</Text>
        </View>


        <View style={styles.placeInformationClaimButtonWrapper}>
          <TouchableOpacity onPress={() => this.facebookLogin()}>
            <View style={styles.placeInformationClaimButton}>
              <Text style={styles.placeInformationClaimButtonText}>Sign up with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  },
  facebookLogin: function(){
    console.log('onBack', this.props.onBack);
    FacebookActions.newFacebookSession(this.props.onBack);
  },

});

module.exports = SignUpPage;
