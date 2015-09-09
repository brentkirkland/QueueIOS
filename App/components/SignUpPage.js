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
  TextInput,
} = React;

var SignUpPage = React.createClass({

  render: function() {
    // if (Parse.User.isCurrent()){
    //   // this.props.navigator.pop();
    //   console.log('user is current');
    // }
    return (
      <View style={styles.container2}>
        <View style={styles.topBar2}/>
        <View style={styles.space}>
          <TouchableOpacity onPress={() => this.props.onBack()}>
          <Image
          style={styles.icon3}
          source={require('image!xicon')}
          />
          </TouchableOpacity>
          <Text style={styles.navBarText}>Sign Up</Text>
          <Text style={styles.loginBarButton}>Login</Text>
        </View>
        <View style={styles.blackdivider}></View>

        <View style={styles.signUpLanding}>

          <Text style={styles.signUpInfo}>Enter your email and a password to sign up.</Text>

          <View style={styles.signUpTextFieldWrapper}>
              <TextInput style={styles.signUpTextField} placeholder={'email'} autoCorrect={false}></TextInput>
          </View>

          <View style={styles.signUpTextFieldWrapper}>
              <TextInput style={styles.signUpTextField} placeholder={'password'} secureTextEntry={true} autoCorrect={false}></TextInput>
          </View>

        <View style={styles.signUpButtonWrapper}>
            <TouchableOpacity style={styles.signUpButtonButton} onPress={() => this.props.navigator.replace({name: 'BankSelectPage'})}>
                <Text style={styles.placeInformationClaimButtonText}>Sign up</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.signUpOr}>
          <View style={styles.signUpOrDivider}/>
          <Text style={styles.signUpOrText}>OR</Text>
          <View style={styles.signUpOrDivider}/>
        </View>

        <View style={styles.signUpButtonWrapper}>
          <TouchableOpacity style={styles.signUpButtonButton} onPress={() => this.facebookLogin(this.props.navigator)}>
              <Text style={styles.placeInformationClaimButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spacer}/>
        </View>
      </View>
    );
  },
  facebookLogin: function(nav){
    FacebookActions.newFacebookSession(nav);
  },

});

module.exports = SignUpPage;
